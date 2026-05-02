import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper animate-on-scroll fade-in">

          <div className="contact-info">
            <div className="contact-info-top">
              <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>Reserve Your Session</h2>
              <p className="contact-lead-text">
                Breathe in the healing salt air. Let our halotherapy experts curate your perfect sanctuary experience.
              </p>
            </div>

            <div className="contact-details">
              <div className="info-item">
                <div className="info-icon-wrapper"><i className="info-icon">📍</i></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Salt Sanctuary Way<br />Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon-wrapper"><i className="info-icon">✉️</i></div>
                <div>
                  <h4>Email Us</h4>
                  <p>concierge@saulthaus.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Hello.</h3>
              <p>Fill out the form below and we will contact you shortly.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="How can we curate your halotherapy experience?"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-100">Send Inquiry</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
