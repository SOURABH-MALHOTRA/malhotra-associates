const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
    },
    projectType: {
      type: String,
      enum: ["Residential", "Commercial", "Industrial", "Other"],
      required: [true, "Project type is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
