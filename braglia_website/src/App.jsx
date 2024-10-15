import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;