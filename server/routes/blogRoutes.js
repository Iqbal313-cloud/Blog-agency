const express = require("express");
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const { protect } = require("../controllers/adminController");

const router = express.Router();

// router.use(protect); // Protect all blog routes

router.post("/", createBlog); // Create a blog
router.get("/", getBlogs); // Get all blogs
router.put("/:id", updateBlog); // Update a blog by ID
router.delete("/:id", deleteBlog); // Delete a blog by ID

module.exports = router;
