import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/team">Team</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms</a>
      </div>
      <div className="footer-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
      <div className="footer-copyright">
        © 2021 SomeCompany, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
