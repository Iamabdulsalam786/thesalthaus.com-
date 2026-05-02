import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo" onClick={closeMobileMenu}>The Sault Haus</a>

        <div className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
          <li><a href="#team" onClick={closeMobileMenu}>Team</a></li>
          <li><a href="#pricing" onClick={closeMobileMenu}>Pricing</a></li>
          <li><a href="#contact" className="btn-nav" onClick={closeMobileMenu}>Book Session</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
