import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer animate-on-scroll fade-in">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>The Sault Haus</h2>
            <p>Your sanctuary for premium massage therapy.</p>
          </div>
          
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Sault Haus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
