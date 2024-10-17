import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="overflow-y-scroll h-screen w-screen bg-white"
    >
      <Header isContactPage={true} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
