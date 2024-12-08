import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Menu />
      <section className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center">
          We’d love to hear from you! Please fill out the form below to get in
          touch.
        </p>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
