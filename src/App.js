import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills'; // 🆕 Import
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />

      {/* Sections with IDs for anchor navigation */}
      <div id="hero"><Hero /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div> {/* 🆕 Skills section added */}
      <div id="contact"><Contact /></div>

      <Footer />
    </Router>
  );
};

export default App;
