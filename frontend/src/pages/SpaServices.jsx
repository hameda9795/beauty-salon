import React from 'react';
import Hero from '../components/Hero';
import './SpaServices.css';

const SpaServices = () => {
  const massages = [
    { name: 'Aromatherapy Massage', duration: '60/90 min', price: '$135-$175' },
    { name: 'Lymphatic Drainage Massage', duration: 'Various', price: '$170-$1,200' },
    { name: 'Bamboo Massage', duration: '60/90/Package', price: '$155-$390' },
    { name: 'Eastern Hot Stone Massage', duration: '60/90 min', price: '$135-$155' },
    { name: 'Deep Tissue Massage', duration: '60/90 min', price: '$135-$175' },
    { name: 'Signature Swedish Massage', duration: '60/90 min', price: '$120-$155' },
    { name: 'Relaxing Scalp Massage', duration: '30/60 min', price: '$30-$55' },
    { name: 'Relaxing Face Massage', duration: '30/60 min', price: '$30-$55' }
  ];

  const bodyTreatments = [
    {
      category: 'Float Therapy',
      description: 'Experience weightlessness and deep relaxation in our state-of-the-art float pods filled with Epsom salt solution.',
      services: [
        { name: 'Single Float Session', duration: '60 min', price: '$89' },
        { name: 'Float Package (3 sessions)', duration: '60 min each', price: '$249' },
        { name: 'Float Package (5 sessions)', duration: '60 min each', price: '$379' }
      ]
    },
    {
      category: 'Body Scrub',
      description: 'Exfoliating treatments that remove dead skin cells and reveal smooth, glowing skin.',
      services: [
        { name: 'Body Scrub Spa (Upper body)', duration: '30 min', price: '$90' },
        { name: 'Body Scrub Spa (Full body)', duration: '60 min', price: '$180' }
      ]
    },
    {
      category: 'Body Wrap',
      description: 'Nourishing treatments that detoxify, hydrate, and rejuvenate your entire body.',
      services: [
        { name: 'Body Wrap Treatment (Partial)', duration: '45 min', price: '$125' },
        { name: 'Body Wrap Treatment (Full body)', duration: '90 min', price: '$250' }
      ]
    }
  ];

  const waxServices = [
    { area: 'Brazilian', price: '$60' },
    { area: 'Bikini', price: '$35' },
    { area: 'Full Leg', price: '$68' },
    { area: 'Half Leg', price: '$38' },
    { area: 'Full Arm', price: '$38' },
    { area: 'Half Arm', price: '$32' },
    { area: 'Chest', price: '$28' },
    { area: 'Underarms', price: '$10' },
    { area: 'Lip or Chin', price: '$20' }
  ];

  return (
    <div className="spa-services-page">
      <Hero
        title="Spa Services"
        subtitle="Indulge in our luxurious spa treatments for complete relaxation and rejuvenation"
        ctaText="Book Now"
        ctaLink="#booking"
      />

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Escape to Serenity</h2>
            <p className="lead">
              At Yukie Natori, we offer a comprehensive range of spa services designed to restore balance,
              relieve stress, and rejuvenate your body and mind.
            </p>
            <p>
              Our experienced therapists combine traditional techniques with modern approaches to provide
              treatments tailored to your individual needs. Whether you're seeking relief from muscle tension,
              looking to detoxify, or simply want to relax and unwind, we have the perfect treatment for you.
            </p>
          </div>
        </div>
      </section>

      {/* Massage Services */}
      <section className="section massage-section">
        <div className="container">
          <h2 className="text-center mb-md">Massage Therapy</h2>
          <p className="text-center section-subtitle mb-lg">
            Therapeutic massages to relieve tension and promote wellness
          </p>

          <div className="massage-grid">
            {massages.map((massage, index) => (
              <div key={index} className="massage-card">
                <h3>{massage.name}</h3>
                <div className="massage-details">
                  <span className="duration">⏱️ {massage.duration}</span>
                  <span className="price">{massage.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="massage-descriptions">
            <div className="description-card">
              <h3>Swedish Massage</h3>
              <p>
                Our signature Swedish massage uses long, flowing strokes to promote relaxation, improve
                circulation, and ease muscle tension. Perfect for first-time spa visitors or anyone seeking
                gentle, soothing relaxation.
              </p>
            </div>

            <div className="description-card">
              <h3>Deep Tissue Massage</h3>
              <p>
                Targets deeper layers of muscle and connective tissue using firm pressure and slow strokes.
                Ideal for chronic pain, muscle knots, and sports injuries.
              </p>
            </div>

            <div className="description-card">
              <h3>Lymphatic Drainage</h3>
              <p>
                Gentle massage technique that stimulates the lymphatic system to remove toxins, reduce
                swelling, and boost immune function. Excellent for post-surgery recovery and wellness maintenance.
              </p>
            </div>

            <div className="description-card">
              <h3>Hot Stone Massage</h3>
              <p>
                Smooth, heated stones are placed on key points of the body and used as massage tools to
                warm and relax muscles, allowing for deeper pressure and enhanced circulation.
              </p>
            </div>

            <div className="description-card">
              <h3>Bamboo Massage</h3>
              <p>
                Innovative technique using heated bamboo sticks of varying sizes to roll and knead muscles,
                providing deep relaxation and relief from tension. The natural bamboo adds an element of
                aromatherapy to the treatment.
              </p>
            </div>

            <div className="description-card">
              <h3>Aromatherapy Massage</h3>
              <p>
                Combines therapeutic massage with essential oils chosen for your specific needs. The powerful
                scents enhance relaxation, reduce stress, and can help with various physical and emotional concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body Treatments */}
      <section className="section body-treatments-section">
        <div className="container">
          <h2 className="text-center mb-lg">Body Treatments</h2>

          {bodyTreatments.map((treatment, index) => (
            <div key={index} className="treatment-category">
              <h3>{treatment.category}</h3>
              <p className="category-description">{treatment.description}</p>

              <div className="treatment-services">
                {treatment.services.map((service, idx) => (
                  <div key={idx} className="treatment-service-card">
                    <h4>{service.name}</h4>
                    <div className="service-info">
                      <span className="duration">⏱️ {service.duration}</span>
                      <span className="price">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waxing Services */}
      <section className="section waxing-section">
        <div className="container">
          <h2 className="text-center mb-md">Wax Hair Removal</h2>
          <p className="text-center section-subtitle mb-lg">
            Professional waxing services for smooth, long-lasting results
          </p>

          <div className="wax-grid">
            {waxServices.map((service, index) => (
              <div key={index} className="wax-card">
                <span className="wax-area">{service.area}</span>
                <span className="wax-price">{service.price}</span>
              </div>
            ))}
          </div>

          <div className="wax-info">
            <p>
              Our experienced estheticians use high-quality wax and gentle techniques to minimize discomfort
              and provide long-lasting smoothness. All waxing services include post-treatment soothing lotion.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="text-center mb-lg">Benefits of Regular Spa Treatments</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🧘</div>
              <h3>Stress Reduction</h3>
              <p>Lower cortisol levels and promote deep relaxation</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">💪</div>
              <h3>Pain Relief</h3>
              <p>Alleviate chronic pain and muscle tension</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">❤️</div>
              <h3>Improved Circulation</h3>
              <p>Enhance blood flow and oxygen delivery</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">😴</div>
              <h3>Better Sleep</h3>
              <p>Promote deeper, more restful sleep</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✨</div>
              <h3>Skin Health</h3>
              <p>Improve skin texture and appearance</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h3>Immune Support</h3>
              <p>Boost immune system function</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Relax and Rejuvenate?</h2>
            <p>Book your spa treatment today and experience the ultimate in relaxation and wellness</p>
            <a href="#booking" className="btn btn-accent btn-large">
              Book Your Spa Treatment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaServices;
