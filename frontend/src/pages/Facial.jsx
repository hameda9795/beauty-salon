import React from 'react';
import Hero from '../components/Hero';
import './Facial.css';

const Facial = () => {
  const facialServices = [
    {
      name: 'Signature European Facial',
      description: 'Classic facial treatment with deep cleansing, exfoliation, extractions, massage, and mask. Customized for your skin type.',
      pricing: [
        { option: '1 Facial', price: '$120' },
        { option: '3 Facials', price: '$90 each' },
        { option: '6 Facials', price: '$80 each' }
      ]
    },
    {
      name: 'HydraFacial MD',
      description: 'Advanced medical-grade facial that cleanses, extracts, and hydrates using patented Vortex technology. Immediate, visible results.',
      pricing: [
        { option: '1 Facial', price: '$295' },
        { option: '3 Facials', price: '$220 each' },
        { option: '6 Facials', price: '$191 each' }
      ]
    },
    {
      name: 'Chemical Peel',
      description: 'Professional-strength exfoliation to improve skin texture, reduce fine lines, and even skin tone.',
      pricing: [
        { option: 'Face', price: '$145' },
        { option: 'Neck and Chest', price: '$175' }
      ]
    },
    {
      name: 'Oxygen Facial',
      description: 'Infusion of pressurized oxygen with customized serums to hydrate, brighten, and rejuvenate tired skin.',
      pricing: [
        { option: 'Single Treatment', price: '$185' },
        { option: 'Package of 3', price: '$165 each' }
      ]
    }
  ];

  const oxygenBenefits = [
    'Deeply hydrated skin',
    'Fine lines and wrinkles reduction',
    'Improved skin tone and texture',
    'Boosted collagen production',
    'Instant radiance and glow',
    'Reduced appearance of pores'
  ];

  const lashExtensions = [
    {
      type: 'Classic Mink Lashes',
      looks: [
        { name: 'Real look (60 lashes)', price: '$125', touchup: '$70' },
        { name: 'Natural look (80 lashes)', price: '$150', touchup: '$90' },
        { name: 'Glamour look (100 lashes)', price: '$175', touchup: '$110' }
      ]
    },
    {
      type: 'Sable Flat Lash',
      looks: [
        { name: 'Real look (60 lashes)', price: '$135', touchup: '$80' },
        { name: 'Natural look (80 lashes)', price: '$160', touchup: '$100' },
        { name: 'Glamour look (100 lashes)', price: '$185', touchup: '$120' }
      ]
    },
    {
      type: 'Cashmere Flat Lash',
      looks: [
        { name: 'Real look (60 lashes)', price: '$140', touchup: '$90' },
        { name: 'Natural look (80 lashes)', price: '$170', touchup: '$110' },
        { name: 'Glamour look (100 lashes)', price: '$195', touchup: '$130' }
      ]
    }
  ];

  return (
    <div className="facial-page">
      <Hero
        title="Facials in NYC"
        subtitle="Restore Your Skin's Natural Glow with our premium facial treatments"
        ctaText="Book Now"
        ctaLink="#booking"
      />

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Advanced Facial Treatments</h2>
            <p className="lead">
              Our expert estheticians use cutting-edge technology and premium products to deliver
              visible, long-lasting results.
            </p>
            <p>
              Whether you're looking to address specific skin concerns or simply maintain healthy,
              glowing skin, our comprehensive facial treatments are customized to meet your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Facial Services */}
      <section className="section facials-section">
        <div className="container">
          <h2 className="text-center mb-lg">Our Facial Treatments</h2>

          <div className="facials-grid">
            {facialServices.map((service, index) => (
              <div key={index} className="facial-service-card">
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <div className="pricing-options">
                  {service.pricing.map((price, idx) => (
                    <div key={idx} className="price-option">
                      <span className="option-name">{price.option}</span>
                      <span className="option-price">{price.price}</span>
                    </div>
                  ))}
                </div>

                <a href="#booking" className="btn btn-primary">
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oxygen Facial Benefits */}
      <section className="section oxygen-section">
        <div className="container">
          <h2 className="text-center mb-md">Oxygen Facial Benefits</h2>
          <p className="text-center section-subtitle mb-lg">
            Experience the transformative power of oxygen therapy
          </p>

          <div className="benefits-grid">
            {oxygenBenefits.map((benefit, index) => (
              <div key={index} className="benefit-badge">
                <span className="check-icon">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eyelash Extensions */}
      <section className="section lash-section">
        <div className="container">
          <h2 className="text-center mb-md">Eyelash Extensions</h2>
          <p className="text-center section-subtitle mb-lg">
            Premium lash extensions for stunning, natural-looking eyes
          </p>

          {lashExtensions.map((lashType, index) => (
            <div key={index} className="lash-type-section">
              <h3 className="lash-type-title">{lashType.type}</h3>

              <div className="lash-table">
                <div className="lash-table-header">
                  <span>Look Type</span>
                  <span>Full Set</span>
                  <span>Touch Up (2-3 weeks)</span>
                </div>

                {lashType.looks.map((look, idx) => (
                  <div key={idx} className="lash-table-row">
                    <span className="look-name">{look.name}</span>
                    <span className="look-price">{look.price}</span>
                    <span className="touchup-price">{look.touchup}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="lash-info">
            <p>
              All lash extensions include a consultation to determine the best style and length for your
              eye shape and desired look. Our certified lash artists use premium, lightweight lashes
              and professional-grade adhesive for long-lasting, comfortable wear.
            </p>
          </div>
        </div>
      </section>

      {/* Skin Concerns */}
      <section className="section concerns-section">
        <div className="container">
          <h2 className="text-center mb-lg">What We Treat</h2>

          <div className="concerns-grid">
            <div className="concern-card">
              <h3>🌟 Aging Skin</h3>
              <p>Fine lines, wrinkles, and loss of elasticity</p>
            </div>
            <div className="concern-card">
              <h3>💧 Dehydration</h3>
              <p>Dry, flaky, or dull skin lacking moisture</p>
            </div>
            <div className="concern-card">
              <h3>✨ Uneven Tone</h3>
              <p>Hyperpigmentation and dark spots</p>
            </div>
            <div className="concern-card">
              <h3>🎯 Acne</h3>
              <p>Breakouts, blackheads, and blemishes</p>
            </div>
            <div className="concern-card">
              <h3>🔴 Redness</h3>
              <p>Sensitivity and inflammation</p>
            </div>
            <div className="concern-card">
              <h3>🌙 Dull Skin</h3>
              <p>Tired, lackluster complexion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Radiant Skin?</h2>
            <p>Book your facial treatment today and reveal your natural glow</p>
            <a href="#booking" className="btn btn-accent btn-large">
              Schedule Your Facial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facial;
