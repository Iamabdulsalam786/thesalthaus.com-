import React from 'react';
import './Team.css';

const teamData = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Master Halotherapist",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    bio: "Pioneering the use of salt mineral absorption to deeply rehabilitate chronic tissue tension."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Mineral Soak Expert",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
    bio: "David artfully blends Himalayan salts with organic aromatherapy to transport the mind."
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Salt Stone Specialist",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Sarah utilizes beautifully heated raw salt stones to radiate deep, lasting muscular relief."
  }
];

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">

        <div className="editorial-header animate-on-scroll fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="editorial-sub" style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', display: 'block', marginBottom: '16px' }}>The Core</span>
          <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Salt Healing Experts</h2>
        </div>

        <div className="team-grid">
          {teamData.map((member, index) => (
            <div key={member.id} className={`team-card animate-on-scroll fade-in delay-${index % 3 + 1}`}>
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} className="team-img" loading="lazy" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
