const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
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

// -------- Multer File Upload --------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image and video files are allowed!"), false);
    }
  },
});

// Serve uploads
app.use("/uploads", express.static("uploads"));

// -------- ROUTES --------
app.get("/", (req, res) => {
  res.send("Welcome to MalhotraAssociates API");
});

app.post(
  "/api/posts",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  createPost
);

app.get("/api/posts", getAllPosts);

app.post("/api/reviews", createReview);
app.get("/api/reviews", getAllReviews);

// -------- Error Handling --------
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "File too large" });
    }
  }
  res.status(500).json({ message: error.message });
});


module.exports = app;
