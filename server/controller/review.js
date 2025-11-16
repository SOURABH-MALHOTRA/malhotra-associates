const Review = require("../model/review");

// Create a new review
createReview = async (req, res) => {
  try {
    const { name, rating, comment, projectType } = req.body;

    if (!name || !rating || !comment || !projectType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({ name, rating, comment, projectType });
    res.status(201).json({ success: true, review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all reviews
getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { createReview, getAllReviews };

