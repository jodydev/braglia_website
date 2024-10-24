import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CompanyContent from "../components/CompanyContent";
import Footer from "../components/Footer";

const Company = () => {
  const isMobile = window.innerWidth < 768;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      id="contacts"
      className={`h-screen w-screen bg-white ${animate && !isMobile ? 'slide-in' : ''}`}
    >
      <Header isContactPage={true} />
      <CompanyContent />
      <Footer />
    </div>
  );
};

export default Company;