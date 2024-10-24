import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Company from "./pages/Company";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const themeColorMetaTag = document.querySelector(
      'meta[name="theme-color"]'
    );
    const statusBarStyleMetaTag = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );

    switch (location.pathname) {
      case "/":
        themeColorMetaTag.setAttribute("content", "#c8ae92");
        statusBarStyleMetaTag.setAttribute("content", "#c8ae92");
        break;
      default:
        themeColorMetaTag.setAttribute("content", "#ffffff");
        statusBarStyleMetaTag.setAttribute("content", "#ffffff");
        break;
    }
  }, [location]);

  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/company" element={<Company />} />
    </Routes>
  );
};

export default App;
