import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";

const Service = () => {
  return (
    <div>
      <Menu />
      <section className="container my-5">
        <h1 className="text-center mb-4">Our Services</h1>
        <p className="text-center">
          Discover the range of services we offer to cater to your needs.
        </p>
      </section>
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default Service;
