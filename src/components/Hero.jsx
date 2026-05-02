import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero_spa_bg.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content animate-on-scroll fade-in">
        <h1 className="hero-title">The Sault Haus</h1>
        <p className="hero-tagline">Relax. Restore. Rebalance.</p>
        <p className="hero-subtext delay-1">
          Escape the noise of daily life and step into a sanctuary of deep relaxation and wellness.
          Experience healing that renews your body and mind.
        </p>
        <div className="hero-cta-wrapper delay-2">
          <a href="#contact" className="btn-primary">Book Appointment</a>
          <p className="trust-line">Certified Therapists • Premium Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
