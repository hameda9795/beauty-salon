import React from 'react';
import Hero from '../components/Hero';
import { images } from '../utils/images';
import './LaserSkin.css';

const LaserSkin = () => {
  const clearLiftServices = [
    {
      name: 'ClearLift Face (Single Session)',
      description: 'Non-invasive laser treatment that stimulates collagen production for firmer, younger-looking skin without downtime.',
      price: '$450',
      duration: '45-60 min',
      image: images.laser.clearLift
    },
    {
      name: 'ClearLift Face (3 Sessions)',
      description: 'Package of 3 treatments for optimal results. Visible improvement in skin texture, tone, and firmness.',
      price: '$1,000',
      savings: 'Save $350',
      duration: '45-60 min per session',
      image: images.laser.clearLift
    },
    {
      name: 'ClearLift Face (6 Sessions)',
      description: 'Complete rejuvenation package. Maximum results with significant improvement in wrinkles, fine lines, and skin laxity.',
      price: '$1,755',
      savings: 'Save $945',
      duration: '45-60 min per session',
      image: images.laser.clearLift
    }
  ];

  const iplServices = [
    {
      name: 'IPL Face',
      description: 'Intense Pulsed Light treatment targets sun damage, age spots, redness, and uneven skin tone on the face.',
      price: '$450',
      area: 'Face',
      image: images.laser.ipl
    },
    {
      name: 'IPL Neck',
      description: 'Treat sun damage and aging signs on the neck for a more youthful appearance.',
      price: '$360',
      area: 'Neck',
      image: images.laser.ipl
    },
    {
      name: 'IPL Face + Neck',
      description: 'Comprehensive treatment for face and neck. Best value for complete rejuvenation.',
      price: '$680',
      area: 'Face & Neck',
      savings: 'Save $130',
      image: images.laser.ipl
    }
  ];

  const hairRemovalAreas = [
    {
      category: 'Small Areas',
      price: '$125',
      areas: ['Upper lip', 'Chin', 'Sideburns', 'Underarms', 'Bikini line', 'Hands', 'Feet']
    },
    {
      category: 'Medium Areas',
      price: '$225',
      areas: ['Full face', 'Neck', 'Half arms', 'Half legs', 'Brazilian', 'Abdomen', 'Lower back']
    },
    {
      category: 'Large Areas',
      price: '$300',
      areas: ['Full arms', 'Full legs', 'Full back', 'Chest', 'Buttocks']
    },
    {
      category: 'Full Body',
      price: '$1,300',
      areas: ['Complete full body treatment - all areas included']
    }
  ];

  const clearLiftBenefits = [
    'No downtime - immediate return to activities',
    'Painless and comfortable treatment',
    'Stimulates natural collagen production',
    'Reduces fine lines and wrinkles',
    'Improves skin texture and tone',
    'Tightens and lifts sagging skin',
    'Safe for all skin types',
    'Natural-looking results'
  ];

  const iplBenefits = [
    'Reduces sun damage and age spots',
    'Minimizes redness and rosacea',
    'Evens out skin tone',
    'Shrinks enlarged pores',
    'Reduces fine lines',
    'Improves overall skin texture',
    'Minimal downtime',
    'Long-lasting results'
  ];

  const laserHairRemovalBenefits = [
    'Permanent hair reduction',
    'Precision targeting',
    'No ingrown hairs',
    'Smooth, hair-free skin',
    'Save time and money long-term',
    'Safe and FDA-approved',
    'Works on most body areas',
    'Quick treatment sessions'
  ];

  const skinConcerns = [
    {
      concern: 'Wrinkles & Fine Lines',
      treatment: 'ClearLift',
      icon: '👵',
      description: 'Non-invasive collagen stimulation for smoother, younger-looking skin'
    },
    {
      concern: 'Sun Damage & Age Spots',
      treatment: 'IPL',
      icon: '☀️',
      description: 'Target pigmentation and restore even skin tone'
    },
    {
      concern: 'Unwanted Hair',
      treatment: 'Laser Hair Removal',
      icon: '🪒',
      description: 'Permanent hair reduction for smooth, carefree skin'
    },
    {
      concern: 'Redness & Rosacea',
      treatment: 'IPL',
      icon: '🔴',
      description: 'Reduce facial redness and visible blood vessels'
    },
    {
      concern: 'Skin Laxity',
      treatment: 'ClearLift',
      icon: '⬆️',
      description: 'Tighten and lift sagging skin without surgery'
    },
    {
      concern: 'Uneven Texture',
      treatment: 'ClearLift + IPL',
      icon: '✨',
      description: 'Combined treatments for optimal skin refinement'
    }
  ];

  const faqs = [
    {
      question: 'Is laser treatment safe?',
      answer: 'Yes! All our laser treatments are FDA-approved and performed by certified technicians. We use the latest technology designed for safety and effectiveness across all skin types.'
    },
    {
      question: 'How many sessions will I need?',
      answer: 'This varies by treatment and individual goals. ClearLift typically requires 3-6 sessions, IPL treatments 3-5 sessions, and laser hair removal 6-8 sessions for optimal results.'
    },
    {
      question: 'Is there any downtime?',
      answer: 'ClearLift has zero downtime. IPL may cause mild redness for a few hours. Laser hair removal may have slight redness that subsides within 24 hours. You can resume normal activities immediately after all treatments.'
    },
    {
      question: 'Does it hurt?',
      answer: 'Most clients describe the sensation as mild and tolerable. ClearLift is virtually painless. IPL feels like a light snap. Laser hair removal has slight discomfort, but we use cooling technology to maximize comfort.'
    },
    {
      question: 'When will I see results?',
      answer: 'Some improvement is visible immediately, but optimal results develop over time as collagen production increases. Full results typically appear 2-3 months after completing your treatment series.'
    }
  ];

  return (
    <div className="laser-skin-page">
      <Hero
        title="Laser Skin Treatments"
        subtitle="Advanced laser technology for skin rejuvenation and hair removal"
        ctaText="Book Consultation"
        ctaLink="#booking"
        backgroundImage={images.hero.laser}
      />

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Advanced Laser Technology</h2>
            <p className="lead">
              Experience the latest in laser skin treatments with our state-of-the-art Alma Lasers technology.
              Safe, effective, and designed to deliver visible results.
            </p>
            <p>
              From skin rejuvenation to permanent hair reduction, our certified laser specialists provide
              personalized treatments tailored to your unique skin type and goals.
            </p>
          </div>
        </div>
      </section>

      {/* ClearLift Services */}
      <section className="section clearlift-section">
        <div className="container">
          <h2 className="text-center mb-md">ClearLift Laser Facial</h2>
          <p className="text-center section-subtitle mb-lg">
            Non-invasive skin tightening and rejuvenation - The "Lunchtime Facelift"
          </p>

          <div className="clearlift-grid">
            {clearLiftServices.map((service, index) => (
              <div key={index} className="laser-service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} loading="lazy" />
                  {service.savings && (
                    <div className="savings-badge">{service.savings}</div>
                  )}
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

          <div className="benefits-box">
            <h3>ClearLift Benefits:</h3>
            <ul className="benefits-list">
              {clearLiftBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IPL Services */}
      <section className="section ipl-section">
        <div className="container">
          <h2 className="text-center mb-md">IPL Photo Facial</h2>
          <p className="text-center section-subtitle mb-lg">
            Intense Pulsed Light therapy for sun damage, age spots, and redness
          </p>

          <div className="ipl-grid">
            {iplServices.map((service, index) => (
              <div key={index} className="ipl-card">
                <div className="ipl-image">
                  <img src={service.image} alt={service.name} loading="lazy" />
                  {service.savings && (
                    <div className="savings-badge">{service.savings}</div>
                  )}
                </div>
                <div className="ipl-content">
                  <span className="area-tag">{service.area}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="price-tag">{service.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="benefits-box">
            <h3>IPL Benefits:</h3>
            <ul className="benefits-list">
              {iplBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Laser Hair Removal */}
      <section className="section hair-removal-section">
        <div className="container">
          <h2 className="text-center mb-md">Laser Hair Removal</h2>
          <p className="text-center section-subtitle mb-lg">
            Permanent hair reduction for smooth, carefree skin
          </p>

          <div className="hair-removal-grid">
            {hairRemovalAreas.map((area, index) => (
              <div key={index} className="hair-removal-card">
                <h3>{area.category}</h3>
                <div className="price-large">{area.price}</div>
                <div className="areas-list">
                  {area.areas.map((location, idx) => (
                    <span key={idx} className="area-badge">{location}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="benefits-box">
            <h3>Laser Hair Removal Benefits:</h3>
            <ul className="benefits-list">
              {laserHairRemovalBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="hair-removal-note">
            <p>
              <strong>Note:</strong> Most clients need 6-8 sessions for optimal results. Package deals available.
              Treatment frequency is typically every 4-6 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Skin Concerns */}
      <section className="section concerns-section">
        <div className="container">
          <h2 className="text-center mb-lg">What We Treat</h2>

          <div className="concerns-grid">
            {skinConcerns.map((item, index) => (
              <div key={index} className="concern-card">
                <div className="concern-icon">{item.icon}</div>
                <h3>{item.concern}</h3>
                <p className="treatment-name">Recommended: {item.treatment}</p>
                <p className="concern-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="text-center mb-lg">Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <h2 className="text-center mb-lg">Results Gallery</h2>

          <div className="laser-gallery">
            <img src={images.laser.clearLift} alt="ClearLift results" loading="lazy" />
            <img src={images.laser.ipl} alt="IPL results" loading="lazy" />
            <img src={images.laser.hairRemoval} alt="Hair removal results" loading="lazy" />
            <img src={images.laser.skinRejuvenation} alt="Skin rejuvenation" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Skin?</h2>
            <p>Book a free consultation to discuss your goals and find the perfect treatment</p>
            <a href="#booking" className="btn btn-accent btn-large">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaserSkin;
