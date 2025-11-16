const postify = require("../model/post.js");
// const cloudinary = require("cloudinary").v2;
const multer = require('multer');
const path = require('path');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Update createPost controller
const createPost = async (req, res) => {
  try {
    const { Title, Content } = req.body;
    
    console.log("Received post data:", { 
      Title, 
      Content,
      files: req.files 
    });

    if (!Title || !Content) {
      return res.status(400).json({ message: "Title and Content are required" });
    }

    const newPost = new postify({ 
      Title, 
      Content,
      Photo: req.files?.photo ? `/uploads/${req.files.photo[0].filename}` : null,
      Video: req.files?.video ? `/uploads/${req.files.video[0].filename}` : null
    });
    
    await newPost.save();
    
    console.log("Post created successfully:", newPost._id);
    
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
const getAllPosts = async (req, res) => {
  try {
    const posts = await postify.find().sort({ createdAt: -1 });  // Sort by newest first                 
    res.status(200).json(posts);         

  } catch (error) {                  
    console.error("Error fetching posts:", error);               
    res.status(500).json({ message: "Server error" });                   
  }          
};           


module.exports={createPost,getAllPosts};