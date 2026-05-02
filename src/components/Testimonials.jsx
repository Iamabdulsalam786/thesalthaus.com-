import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The most profoundly relaxing experience of my life. From the moment I entered, the ambiance transported me to complete serenity.",
    role: "Regular Client"
  },
  {
    id: 2,
    name: "James T.",
    text: "Elena’s deep tissue work completely alleviated my chronic shoulder pain. The professionalism and environment are unmatched.",
    role: "First Time Guest"
  },
  {
    id: 3,
    name: "Emily R.",
    text: "An absolute sanctuary. The attention to detail, from the organic oils to the heated stones, is pure luxury.",
    role: "Regular Client"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        
        <div className="editorial-header animate-on-scroll fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="editorial-sub" style={{ display: 'block', marginBottom: '16px' }}>The Discourse</span>
          <h2 className="section-title" style={{ fontSize: '4rem' }}>Words.</h2>
        </div>

        <div className="test-editorial-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial.id} className={`test-editorial-item animate-on-scroll fade-in delay-${index % 3 + 1}`}>
              <div className="test-quote-mark">"</div>
              <p className="test-quote-text">{testimonial.text}</p>
              <div className="test-meta">
                <span className="test-name">— {testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
