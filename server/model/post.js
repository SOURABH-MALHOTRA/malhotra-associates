const mongoose = require("mongoose");
const post = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
    Photo: {
      type: String,
    },
    Video: {
      type: String,
    },
  },
  { timestamps: true }
);
const postify = mongoose.model("post", post);
module.exports = postify;
