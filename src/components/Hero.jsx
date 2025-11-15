import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #4A4A3A 0%, #6B6B5A 100%)'
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && (
          <a href={ctaLink || '#booking'} className="btn btn-accent hero-cta">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
