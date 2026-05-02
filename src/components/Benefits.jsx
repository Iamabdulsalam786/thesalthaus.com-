import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section id="approach" className="benefits">
      <div className="container">
        <div className="benefits-wrapper">
          <div className="benefits-content animate-on-scroll fade-in">
            <h2 className="section-title">Why Choose The Sault Haus</h2>
            <p className="benefits-desc">
              We believe in more than just a massage. We provide a holistic healing experience designed entirely around your personal wellness journey.
            </p>

            <ul className="benefits-list">
              <li className="benefit-item">
                <span className="check-icon">✓</span>
                <div>
                  <h4>Professional Therapists</h4>
                  <p>Certified experts trained in advanced healing techniques.</p>
                </div>
              </li>
              <li className="benefit-item delay-1">
                <span className="check-icon">✓</span>
                <div>
                  <h4>Relaxing Environment</h4>
                  <p>A tranquil, clean, and meticulously designed sanctuary space.</p>
                </div>
              </li>
              <li className="benefit-item delay-2">
                <span className="check-icon">✓</span>
                <div>
                  <h4>Personalized Care</h4>
                  <p>Every session is customized to target your specific tension points.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
