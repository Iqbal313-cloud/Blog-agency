import React from "react";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Menu />
    <Hero />
    <BlogSection />
    {/* Add Custom Section */}
    <Footer />
  </>
);

export default Home;
