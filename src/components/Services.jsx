import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: "Himalayan Salt Stone",
    desc: "Hand-carved, heated pink salt stones glide over sore muscles, replenishing necessary minerals while instantly melting deep structural tension.",
    icon: "🏔️"
  },
  {
    id: 2,
    title: "Halotherapy Glow Scrub",
    desc: "A rejuvenating full-body exfoliation using fine Himalayan salt crystals and botanical oils to powerfully detoxify and polish the skin.",
    icon: "✨"
  },
  {
    id: 3,
    title: "Salt Cave Deep Tissue",
    desc: "Performed in our breathable active salt environment. This intense muscle therapy clears your airways while releasing deeply anchored knots.",
    icon: "🌿"
  },
  {
    id: 4,
    title: "Aromatic Salt Bath",
    desc: "A deeply restorative private hydrotherapy soak infused with raw mineral salts and curated, calming organic essential oils.",
    icon: "🛁"
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        
        <div className="editorial-header animate-on-scroll fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="editorial-sub" style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', display: 'block', marginBottom: '16px' }}>Curated Halotherapy</span>
          <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Salt Therapies</h2>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className={`service-card animate-on-scroll fade-in delay-${index % 3 + 1}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
