import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      id="contacts"
      className={`h-screen w-screen bg-white ${animate ? 'slide-in' : ''}`}
    >
      <Header isContactPage={true} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;