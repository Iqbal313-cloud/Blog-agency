const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  bio: { type: String },
  photo: { type: String }, // URL to photo
  socialLinks: {
    linkedin: { type: String },
    twitter: { type: String },
    github: { type: String },
  },
  joinedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Team", teamSchema);
