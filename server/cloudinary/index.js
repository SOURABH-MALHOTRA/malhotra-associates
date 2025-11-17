const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// 🔥 Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dou89kppt",
  api_key: process.env.CLOUDINARY_API_KEY || "156889194276225",
  api_secret: process.env.CLOUDINARY_API_SECRET || "7NGe8I-Oqlec0jlcgdGMHyccPSc",
});

// 🔥 Multer Buffer Storage
const storage = multer.memoryStorage();

// Upload file → Cloudinary
async function imageUploadUtil(fileBuffer, folderName = "malhotra") {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: folderName, // images/videos dono ke liye kaam karega
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(fileBuffer);
  });
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
