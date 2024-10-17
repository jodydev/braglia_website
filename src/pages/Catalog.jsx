import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CatalogForm from "../components/CatalogForm"; 
import Footer from "../components/Footer";

const Catalog = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      id="catalog"
      className={`overflow-y-scroll h-screen w-screen bg-white ${animate ? 'slide-in' : ''}`}
    >
      <Header isCatalogPage={true} />
      <CatalogForm />
      <Footer />
    </div>
  );
};

export default Catalog;