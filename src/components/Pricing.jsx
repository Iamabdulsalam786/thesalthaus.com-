import React from 'react';
import './Pricing.css';

const pricingData = [
  {
    id: 1,
    title: "Signature Relaxation",
    price: "$95",
    duration: "60 Min",
    desc: "A soothing Swedish massage perfect for releasing everyday tension and restoring balance.",
    features: "Aromatherapy Selection • Hot Towel Treatment • Herbal Tea"
  },
  {
    id: 2,
    title: "Deep Tissue Recovery",
    price: "$130",
    duration: "90 Min",
    desc: "Targeted deep pressure to alleviate chronic muscle pain and structural stiffness.",
    features: "Intensive Knot Therapy • Muscle Stretching • Herbal Tea"
  },
  {
    id: 3,
    title: "Luxury Hot Stone",
    price: "$150",
    duration: "90 Min",
    desc: "Warming basalt stones combined with therapeutic strokes for deep, melting relaxation.",
    features: "Basalt Alignment • Robe Use • Post-Session Tea"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        
        <div className="editorial-header animate-on-scroll fade-in" style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span className="editorial-sub" style={{ display: 'block', marginBottom: '16px' }}>Curated Experiences</span>
          <h2 className="section-title" style={{ fontSize: '4.5rem' }}>The Menu.</h2>
        </div>
        
        <div className="pricing-menu-list">
          {pricingData.map((plan, index) => (
            <div key={plan.id} className={`pricing-menu-item animate-on-scroll fade-in delay-${index % 3 + 1}`}>
              <div className="pricing-item-top">
                <h3 className="pricing-item-title">{plan.title}</h3>
                <div className="pricing-item-cost">
                  {plan.price} <span>/ {plan.duration}</span>
                </div>
              </div>
              <p className="pricing-item-desc">{plan.desc}</p>
              <div className="pricing-item-features">{plan.features}</div>
            </div>
          ))}
        </div>

        <div className="pricing-cta animate-on-scroll fade-in delay-2">
          <a href="#contact" className="btn-primary">Reserve Your Experience</a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
