

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Content from './components/Content';
import CardComponent from './components/CardComponent';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content/>
      <Features />
      <Team />
      <Blog />
      <CardComponent/>
      <Footer />
    </div>
  );
}

export default App;
