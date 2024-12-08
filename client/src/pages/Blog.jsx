import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";

const Blog = () => {
  return (
    <div>
      <Menu />
      <section className="container my-5">
        <h1 className="text-center mb-4">Our Blogs</h1>
        <p className="text-center">Explore our latest articles and insights.</p>
      </section>
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;
