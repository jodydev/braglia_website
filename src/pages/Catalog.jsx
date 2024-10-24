import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CatalogForm from "../components/CatalogForm"; 
import Footer from "../components/Footer";

const Catalog = () => {
  const isMobile = window.innerWidth < 768;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      id="catalog"
      className={`h-full w-full bg-white ${animate && !isMobile ? 'slide-in' : ''}`}
    >
      <Header isCatalogPage={true} />
      <CatalogForm />
      <Footer />
    </div>
  );
};

export default Catalog;