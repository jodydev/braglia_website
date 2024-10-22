import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Comunications from "./pages/Comunications";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/company" element={<Company />} />
      <Route path="/comunications" element={<Comunications />} />
    </Routes>
  );
};

export default App;
