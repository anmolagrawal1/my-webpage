import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">nullBrains</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href='#search'>🔎</a></li>
      </ul>
      <div className="auth-links">
        <a href="#signin">Sign In</a>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;