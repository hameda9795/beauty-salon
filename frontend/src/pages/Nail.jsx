import React from 'react';
import Hero from '../components/Hero';
import { images } from '../utils/images';
import './Nail.css';

const Nail = () => {
  const gelServices = [
    {
      name: 'Gel Manicure',
      description: 'Long-lasting gel polish that maintains its shine for up to 3 weeks. Includes nail shaping, cuticle care, and hand massage.',
      duration: '60 min',
      price: '$70',
      image: images.nails.gelNails
    },
    {
      name: 'Gel Pedicure',
      description: 'Complete pedicure with gel polish, exfoliation, and foot massage for smooth, beautiful feet.',
      duration: '75 min',
      price: '$75',
      image: images.nails.pedicure
    },
    {
      name: 'Gel Fill In',
      description: 'Maintenance service for gel nails, filling in growth and refreshing your manicure.',
      duration: '45 min',
      price: '$100',
      image: images.nails.acrylicNails
    }
  ];

  const premiumServices = [
    {
      name: 'Happy Hour Pedicure',
      description: 'Our special express pedicure available during off-peak hours. Includes basic care, polish, and quick foot massage.',
      duration: '45 min',
      price: '$70',
      features: ['Nail trimming & shaping', 'Cuticle care', 'Polish application', 'Quick massage']
    },
    {
      name: 'SpaRitual Organic Aroma Spa Pedicure',
      description: 'Luxurious organic pedicure using SpaRitual products. Includes aromatherapy, exfoliation, mask, and extended massage.',
      duration: '90 min',
      price: '$125',
      features: ['Organic aromatherapy soak', 'Sugar scrub exfoliation', 'Hydrating mask', 'Extended foot & leg massage', 'Hot towel treatment', 'Premium polish']
    }
  ];

  const nailArtOptions = [
    { name: 'Simple Design (per nail)', price: '$5' },
    { name: 'Medium Design (per nail)', price: '$10' },
    { name: 'Complex Design (per nail)', price: '$15' },
    { name: 'French Tips', price: '+$10' },
    { name: 'Ombre', price: '+$15' },
    { name: 'Chrome/Mirror Finish', price: '+$20' },
    { name: '3D Decorations', price: '+$5-$15' },
    { name: 'Rhinestones & Gems', price: '+$3-$10' }
  ];

  const regularServices = [
    { name: 'Regular Manicure', duration: '45 min', price: '$45' },
    { name: 'Regular Pedicure', duration: '60 min', price: '$55' },
    { name: 'Paraffin Wax Treatment (hands)', duration: '20 min', price: '$25' },
    { name: 'Paraffin Wax Treatment (feet)', duration: '20 min', price: '$30' },
    { name: 'Nail Repair (per nail)', duration: '10 min', price: '$10' },
    { name: 'Nail Removal (gel/acrylic)', duration: '30 min', price: '$25' },
    { name: 'Callus Removal', duration: '15 min', price: '$20' }
  ];

  const benefits = [
    {
      icon: '💅',
      title: 'Japanese Techniques',
      description: 'We use authentic Japanese nail care methods known for precision and attention to detail'
    },
    {
      icon: '🌿',
      title: 'Premium Products',
      description: 'High-quality, long-lasting polishes and organic treatments for healthier nails'
    },
    {
      icon: '✨',
      title: 'Hygiene First',
      description: 'All tools are thoroughly sterilized, and we use disposable files and buffers'
    },
    {
      icon: '🎨',
      title: 'Custom Designs',
      description: 'From classic elegance to bold nail art, we bring your vision to life'
    }
  ];

  return (
    <div className="nail-page">
      <Hero
        title="Nail Services NYC"
        subtitle="Premium Japanese nail care with gel manicures, pedicures, and stunning nail art"
        ctaText="Book Now"
        ctaLink="#booking"
        backgroundImage={images.hero.nail}
      />

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Japanese Nail Artistry in Manhattan</h2>
            <p className="lead">
              Experience the finest in nail care with our Japanese-inspired techniques and premium products.
              Our skilled nail technicians combine artistry with precision to create beautiful, long-lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Gel Services */}
      <section className="section gel-services-section">
        <div className="container">
          <h2 className="text-center mb-md">Gel Nail Services</h2>
          <p className="text-center section-subtitle mb-lg">
            Long-lasting shine and durability with our premium gel polish
          </p>

          <div className="gel-services-grid">
            {gelServices.map((service, index) => (
              <div key={index} className="gel-service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} loading="lazy" />
                </div>
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span className="duration">⏱️ {service.duration}</span>
                    <span className="price">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="section premium-services-section">
        <div className="container">
          <h2 className="text-center mb-lg">Premium Spa Pedicures</h2>

          {premiumServices.map((service, index) => (
            <div key={index} className="premium-service-card">
              <div className="premium-header">
                <h3>{service.name}</h3>
                <div className="premium-meta">
                  <span className="duration">⏱️ {service.duration}</span>
                  <span className="price">{service.price}</span>
                </div>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h4>Includes:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a href="#booking" className="btn btn-primary">
                Book This Service
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Nail Art */}
      <section className="section nail-art-section">
        <div className="container">
          <h2 className="text-center mb-md">Nail Art & Add-Ons</h2>
          <p className="text-center section-subtitle mb-lg">
            Express your style with custom nail art designs
          </p>

          <div className="nail-art-image">
            <img src={images.nails.nailArt} alt="Nail Art Examples" loading="lazy" />
          </div>

          <div className="nail-art-grid">
            {nailArtOptions.map((option, index) => (
              <div key={index} className="nail-art-option">
                <span className="option-name">{option.name}</span>
                <span className="option-price">{option.price}</span>
              </div>
            ))}
          </div>

          <p className="nail-art-note">
            Bring in your inspiration photos or work with our artists to create a custom design.
            Prices vary based on complexity and detail.
          </p>
        </div>
      </section>

      {/* Regular Services */}
      <section className="section regular-services-section">
        <div className="container">
          <h2 className="text-center mb-lg">Classic Nail Services</h2>

          <div className="regular-services-grid">
            {regularServices.map((service, index) => (
              <div key={index} className="regular-service-row">
                <div className="service-info">
                  <span className="service-name">{service.name}</span>
                  <span className="service-duration">{service.duration}</span>
                </div>
                <span className="service-price">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="text-center mb-lg">Why Choose Our Nail Salon</h2>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-section">
        <div className="container">
          <h2 className="text-center mb-lg">Our Work</h2>

          <div className="gallery-grid">
            <img src={images.nails.manicure} alt="Manicure work" loading="lazy" />
            <img src={images.nails.pedicure} alt="Pedicure work" loading="lazy" />
            <img src={images.nails.gelNails} alt="Gel nails" loading="lazy" />
            <img src={images.nails.nailArt} alt="Nail art designs" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Beautiful Nails?</h2>
            <p>Book your nail appointment today and treat yourself to premium nail care</p>
            <a href="#booking" className="btn btn-accent btn-large">
              Book Your Nail Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nail;
