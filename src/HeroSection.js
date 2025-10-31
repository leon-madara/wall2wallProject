import React, { useEffect, useState } from 'react';
import mobileHero from './imag2mobyl.png';
import desktopHero from './imag1.png';

function HeroSection({ onTryVisualizer, onExploreDesigns }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const bgImage = isMobile ? mobileHero : desktopHero;

  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="content">
        <h1 className="headline">Your Floor, Re-imagined</h1>
        <p className="copy">
          Upload a photo, select your wall, and instantly preview new textures. Design your dream space with confidence.
        </p>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={onTryVisualizer}>
            Try the Visualizer
          </button>
          <button className="btn btn-secondary" onClick={onExploreDesigns}>
            Explore the Designs
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
