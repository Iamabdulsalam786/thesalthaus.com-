import React from 'react';
import './Atmosphere.css';

const spaRoom = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop';

const Atmosphere = () => {
  return (
    <section id="experience" className="atmosphere">
      <div className="atmosphere-background" style={{ backgroundImage: `url(${spaRoom})` }}></div>
      <div className="atmosphere-overlay"></div>
      
      <div className="atmosphere-content animate-on-scroll fade-in">
        <h2 className="atmosphere-huge-title">Sanctuary.</h2>
        <p className="atmosphere-lead">Step inside and let the world fade away.</p>
        <p className="atmosphere-text">
          Every detail of our environment is intentionally curated to bring you comfort, peace, and immediate stress-relief from the moment you walk through our doors.
        </p>
      </div>
    </section>
  );
};

export default Atmosphere;
