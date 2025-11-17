const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { upload } = require("./cloudinary/index"); // ⭐ Cloudinary Multer
const { createPost, getAllPosts } = require("./controller/post.js");
const { createReview, getAllReviews } = require("./controller/review.js");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.db_url)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();

// -------- CORS --------
app.use(
  cors({
    origin: process.env.Frontend_url,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// ❌ No multer diskStorage
// ❌ No uploads folder
// ❌ No static uploads serving

// -------- ROUTES --------
app.get("/", (req, res) => {
  res.send("Welcome to MalhotraAssociates API");
});

// ⭐ Cloudinary File Upload
app.post(
  "/api/posts",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  createPost
);

// POSTS API
app.get("/api/posts", getAllPosts);

// REVIEWS API
app.post("/api/reviews", createReview);
app.get("/api/reviews", getAllReviews);

// -------- Error Handling --------
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

// ❌ REMOVE THIS (Vercel doesn't allow app.listen)
app.listen(7000, () => console.log("Server running on port"));

// ✔ Export the app for Vercel
module.exports = app;
