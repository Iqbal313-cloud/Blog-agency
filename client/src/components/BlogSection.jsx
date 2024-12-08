// src/components/BlogSection.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/api/blogs").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <section className="blog-section">
      <h2>Blogs</h2>
      <div className="blog-list">
        {blogs.slice(0, 6).map((blog) => (
          <div key={blog._id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.content.slice(0, 100)}...</p>
            <p>
              <strong>Author:</strong> {blog.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
