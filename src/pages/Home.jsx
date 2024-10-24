import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import Animations from "../animations/Animations";

const Home = () => {
  const isMobile = window.innerWidth < 768;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="home" className={` ${animate && !isMobile ? "slide-in" : ""}`}>
      <Hero />
      <Category />
      <Contents />
      <Footer />
      <Animations />
    </section>
  );
};

export default Home;
