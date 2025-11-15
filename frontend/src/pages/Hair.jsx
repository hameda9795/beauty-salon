import React from 'react';
import Hero from '../components/Hero';
import { images } from '../utils/images';
import './Hair.css';

const Hair = () => {
  const haircutServices = [
    {
      name: 'Women\'s Haircut',
      description: 'Professional cut tailored to your face shape, hair type, and lifestyle. Includes consultation, shampoo, and blow-dry styling.',
      price: '$80-$135',
      duration: '60-90 min',
      image: images.hair.haircut
    },
    {
      name: 'Men\'s Haircut',
      description: 'Classic or modern cuts with precision and attention to detail. Includes consultation, shampoo, and styling.',
      price: '$60-$80',
      duration: '45-60 min',
      image: images.hair.haircut
    },
    {
      name: 'Children\'s Haircut (under 10)',
      description: 'Patient, gentle haircuts for children in a comfortable environment.',
      price: '$50',
      duration: '30-45 min',
      image: images.hair.haircut
    },
    {
      name: 'Blowout',
      description: 'Professional blow-dry styling for sleek, voluminous, or textured looks that last.',
      price: '$65-$85',
      duration: '45 min',
      image: images.hair.haircut
    }
  ];

  const coloringServices = [
    {
      name: 'Single Color',
      description: 'All-over permanent or semi-permanent color. Includes consultation, application, and styling.',
      price: '$125-$155',
      duration: '2-3 hours',
      image: images.hair.coloring
    },
    {
      name: 'Highlights - Full',
      description: 'Full head highlights for dimension and brightness. Customized to complement your skin tone.',
      price: '$300+',
      duration: '3-4 hours',
      image: images.hair.highlights
    },
    {
      name: 'Balayage',
      description: 'Hand-painted highlights for natural, sun-kissed dimension. Low maintenance with beautiful grow-out.',
      price: '$300+',
      duration: '3-4 hours',
      image: images.hair.balayage
    },
    {
      name: 'Root Touch-Up',
      description: 'Refresh your color by covering regrowth at the roots.',
      price: '$85-$110',
      duration: '1.5-2 hours',
      image: images.hair.coloring
    }
  ];

  const treatments = [
    {
      name: 'Keratin Treatment - Brazilian Blowout',
      description: 'Revolutionary smoothing treatment that eliminates frizz, adds shine, and reduces styling time. Results last 3-5 months.',
      price: '$400+',
      duration: '3-4 hours',
      benefits: [
        'Eliminates up to 95% of frizz',
        'Cuts drying time in half',
        'Adds incredible shine',
        'Lasts 3-5 months',
        'Safe for all hair types'
      ]
    },
    {
      name: 'Japanese Straightening',
      description: 'Permanent straightening for sleek, pin-straight hair. Perfect for those seeking long-term frizz control.',
      price: '$500+',
      duration: '4-6 hours',
      benefits: [
        'Permanently straight hair',
        'Eliminates all frizz',
        'Lasts 6-8 months',
        'Low maintenance',
        'Mirror-like shine'
      ]
    },
    {
      name: 'Digital Perm',
      description: 'Modern perm technique using heat for natural-looking waves and curls that last 6-12 months.',
      price: '$350+',
      duration: '3-4 hours',
      benefits: [
        'Natural-looking curls',
        'Long-lasting results',
        'Adds volume and texture',
        'Low styling time',
        'Customizable curl pattern'
      ]
    },
    {
      name: 'Regular Perm',
      description: 'Traditional perm for adding curl, wave, or volume to your hair.',
      price: '$250-$600',
      duration: '2-4 hours',
      benefits: [
        'Add body and volume',
        'Create lasting curls',
        'Reduce styling time',
        'Lasts 3-6 months'
      ]
    }
  ];

  const deepConditioningTreatments = [
    { name: 'Olaplex Treatment', price: '$75', duration: '45 min' },
    { name: 'Deep Conditioning Mask', price: '$50', duration: '30 min' },
    { name: 'Scalp Treatment', price: '$65', duration: '45 min' },
    { name: 'Hair Gloss/Toner', price: '$85', duration: '60 min' }
  ];

  const benefits = [
    {
      icon: '✂️',
      title: 'Expert Stylists',
      description: 'Our team has extensive training in the latest cutting and coloring techniques'
    },
    {
      icon: '🌟',
      title: 'Premium Products',
      description: 'We use only professional-grade products from trusted brands'
    },
    {
      icon: '💬',
      title: 'Personalized Consultation',
      description: 'Every service begins with a thorough consultation to understand your goals'
    },
    {
      icon: '🎨',
      title: 'Custom Color',
      description: 'Hand-mixed formulas created specifically for your desired look'
    }
  ];

  return (
    <div className="hair-page">
      <Hero
        title="Hair Salon NYC"
        subtitle="Expert hair styling, coloring, and treatments from our skilled stylists"
        ctaText="Book Now"
        ctaLink="#booking"
        backgroundImage={images.hero.hair}
      />

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Your Hair, Perfected</h2>
            <p className="lead">
              At Yukie Natori, we believe beautiful hair is an art form. Our expert stylists combine
              technical precision with creative vision to deliver stunning results tailored to you.
            </p>
            <p>
              Whether you're seeking a fresh cut, vibrant color, or transformative treatment, we're
              dedicated to making you look and feel your absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Haircut Services */}
      <section className="section haircut-section">
        <div className="container">
          <h2 className="text-center mb-lg">Haircut Services</h2>

          <div className="haircut-grid">
            {haircutServices.map((service, index) => (
              <div key={index} className="hair-service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} loading="lazy" />
                </div>
                <div className="service-details">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-pricing">
                    <span className="duration">⏱️ {service.duration}</span>
                    <span className="price">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coloring Services */}
      <section className="section coloring-section">
        <div className="container">
          <h2 className="text-center mb-md">Hair Coloring</h2>
          <p className="text-center section-subtitle mb-lg">
            Custom color formulated just for you
          </p>

          <div className="coloring-grid">
            {coloringServices.map((service, index) => (
              <div key={index} className="coloring-card">
                <div className="color-image">
                  <img src={service.image} alt={service.name} loading="lazy" />
                </div>
                <div className="color-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="color-meta">
                    <div className="meta-item">
                      <span className="meta-label">Duration:</span>
                      <span className="meta-value">{service.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Price:</span>
                      <span className="meta-value price">{service.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section treatments-section">
        <div className="container">
          <h2 className="text-center mb-lg">Hair Treatments</h2>

          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-card">
              <div className="treatment-header">
                <div>
                  <h3>{treatment.name}</h3>
                  <p className="treatment-desc">{treatment.description}</p>
                </div>
                <div className="treatment-pricing">
                  <span className="price">{treatment.price}</span>
                  <span className="duration">{treatment.duration}</span>
                </div>
              </div>

              <div className="treatment-benefits">
                <h4>Benefits:</h4>
                <ul>
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <a href="#booking" className="btn btn-primary">
                Book This Treatment
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Conditioning */}
      <section className="section conditioning-section">
        <div className="container">
          <h2 className="text-center mb-md">Deep Conditioning & Add-Ons</h2>
          <p className="text-center section-subtitle mb-lg">
            Restore and maintain healthy, vibrant hair
          </p>

          <div className="conditioning-grid">
            {deepConditioningTreatments.map((treatment, index) => (
              <div key={index} className="conditioning-card">
                <h4>{treatment.name}</h4>
                <div className="conditioning-meta">
                  <span className="duration">⏱️ {treatment.duration}</span>
                  <span className="price">{treatment.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="text-center mb-lg">Why Choose Our Salon</h2>

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

      {/* Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <h2 className="text-center mb-lg">Our Work</h2>

          <div className="hair-gallery">
            <img src={images.hair.haircut} alt="Haircut example" loading="lazy" />
            <img src={images.hair.coloring} alt="Hair coloring" loading="lazy" />
            <img src={images.hair.highlights} alt="Highlights" loading="lazy" />
            <img src={images.hair.balayage} alt="Balayage" loading="lazy" />
            <img src={images.hair.keratin} alt="Keratin treatment" loading="lazy" />
            <img src={images.hair.perm} alt="Perm styling" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Hair Transformation?</h2>
            <p>Book your appointment with our expert stylists today</p>
            <a href="#booking" className="btn btn-accent btn-large">
              Book Your Hair Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hair;
