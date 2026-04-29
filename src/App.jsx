import React from 'react';
import Navbar from './components/Navbar';
import Hero   from './components/Hero';
import Home   from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SingleProject from './pages/SingleProject';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<SingleProject />} />
      </Routes>

      <Footer />
    </>
  );
}

