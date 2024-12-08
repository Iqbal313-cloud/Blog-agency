import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <div>
      <Menu />
      <section className="container my-5">
        <h1 className="text-center mb-4">About Us</h1>
        <p className="text-center">
          Welcome to our website! We are dedicated to delivering exceptional
          services and sharing our passion for excellence.
        </p>
      </section>
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
