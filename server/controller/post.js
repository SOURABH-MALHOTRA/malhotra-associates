const postify = require("../model/post");
const { upload, imageUploadUtil } = require("../cloudinary/index.js");

// Create Post with Cloudinary
const createPost = async (req, res) => {
  try {
    const { Title, Content } = req.body;

    if (!Title || !Content) {
      return res.status(400).json({ message: "Title and Content are required" });
    }

    let photoUrl = null;
    let videoUrl = null;

    // 🔥 Upload Photo to Cloudinary
    if (req.files?.photo) {
      const photoFile = req.files.photo[0].buffer.toString("base64");
      const photoResult = await imageUploadUtil(`data:${req.files.photo[0].mimetype};base64,${photoFile}`);
      photoUrl = photoResult.secure_url;   // ✔ Cloudinary URL
    }

    // 🔥 Upload Video to Cloudinary
    if (req.files?.video) {
      const videoFile = req.files.video[0].buffer.toString("base64");
      const videoResult = await imageUploadUtil(`data:${req.files.video[0].mimetype};base64,${videoFile}`);
      videoUrl = videoResult.secure_url;  // ✔ Cloudinary URL
    }

    // Save to DB
    const newPost = new postify({
      Title,
      Content,
      Photo: photoUrl,
      Video: videoUrl
    });

    await newPost.save();

    res.status(201).json({
      message: "Post created successfully",
      post: newPost
    });

  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// GET All Posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postify.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createPost, getAllPosts };
