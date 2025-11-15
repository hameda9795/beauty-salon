import React from 'react';
import Hero from '../components/Hero';
import './HeadSpa.css';

const HeadSpa = () => {
  const services = [
    {
      title: 'Signature Head Spa Experience',
      duration: '75 min',
      price: '$195',
      description: 'Our signature treatment featuring the exclusive Josiane Laure Method. This comprehensive head spa includes scalp analysis, deep cleansing, exfoliation, massage, and organic botanical oil treatment.',
      features: [
        'Scalp analysis and consultation',
        'Deep cleansing and exfoliation',
        'Pressure point massage',
        'Organic botanical oil treatment',
        'Steam therapy',
        'Hair treatment mask'
      ]
    },
    {
      title: 'HydraFacial Keravive + Japanese Head Spa',
      duration: '75-90 min',
      price: '$350',
      description: 'Advanced scalp treatment combining HydraFacial Keravive technology with traditional Japanese head spa techniques for ultimate scalp health and hair vitality.',
      features: [
        'HydraFacial Keravive scalp treatment',
        'Deep cleansing and hydration',
        'Japanese head spa massage',
        'Growth factor serum application',
        'Scalp and follicle rejuvenation'
      ]
    },
    {
      title: 'Dry Head Spa + Eye Massage',
      duration: '50 min',
      price: '$125',
      description: 'Relaxing dry head spa treatment combined with soothing eye massage. Perfect for relieving stress, tension headaches, and eye strain.',
      features: [
        'Dry head massage techniques',
        'Pressure point therapy',
        'Eye area massage',
        'Tension relief',
        'No hair washing required'
      ]
    },
    {
      title: 'Dry Head Spa + Back Massage',
      duration: '80 min',
      price: '$155',
      description: 'Extended treatment combining dry head spa with therapeutic back massage for complete upper body relaxation.',
      features: [
        'Comprehensive dry head massage',
        'Upper back and shoulder massage',
        'Pressure point therapy',
        'Stress and tension relief',
        'No hair washing required'
      ]
    }
  ];

  const benefits = [
    {
      icon: '🧠',
      title: 'Stress Relief',
      description: 'Awakens energy points on the head to promote deep relaxation and mental clarity'
    },
    {
      icon: '💆',
      title: 'Improved Circulation',
      description: 'Stimulates blood flow to the scalp, promoting healthier hair growth'
    },
    {
      icon: '✨',
      title: 'Scalp Health',
      description: 'Deep cleansing and exfoliation remove buildup and nourish the scalp'
    },
    {
      icon: '🌿',
      title: 'Natural Balance',
      description: 'Organic botanical oils from France restore balance to scalp and hair'
    }
  ];

  const faqs = [
    {
      question: 'What is a Japanese head spa?',
      answer: 'A Japanese head spa is a comprehensive scalp treatment that combines cleansing, massage, and therapeutic techniques to promote scalp health, relaxation, and hair vitality. It focuses on pressure points and energy flow to provide both physical and mental benefits.'
    },
    {
      question: 'How often should I get a head spa treatment?',
      answer: 'For optimal results, we recommend a head spa treatment every 2-4 weeks. However, the frequency can vary based on your scalp condition, hair concerns, and personal wellness goals. Our specialists can provide personalized recommendations during your consultation.'
    },
    {
      question: 'What\'s the difference between a dry and wet head spa?',
      answer: 'A wet head spa includes hair washing, deep cleansing, and treatment application, making it ideal for scalp health and hair nourishment. A dry head spa focuses on massage and pressure point therapy without washing, perfect for quick relaxation and stress relief when you don\'t want to wash your hair.'
    },
    {
      question: 'Is Japanese head spa good for hair loss?',
      answer: 'Yes! Head spa treatments can help with hair loss by improving scalp circulation, removing buildup that blocks follicles, and creating optimal conditions for healthy hair growth. Our HydraFacial Keravive treatment is particularly effective for addressing hair thinning concerns.'
    },
    {
      question: 'Do you use any special products?',
      answer: 'We use the exclusive Josiane Laure Method products featuring highly concentrated, organic botanical oils from France. These premium products are specifically formulated to nourish the scalp, balance sebum production, and promote healthy hair growth.'
    }
  ];

  return (
    <div className="head-spa-page">
      <Hero
        title="Japanese Head Spa"
        subtitle="Scalp Detox & Relaxation at Yukie Natori Manhattan - Experience the transformative Josiane Laure Method"
        ctaText="Book Now"
        ctaLink="#booking"
      />

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Experience the Josiane Laure Method</h2>
            <p className="lead">
              Our Japanese Head Spa treatments combine ancient Asian techniques with premium French botanical oils
              to create a transformative experience for your scalp, hair, and overall well-being.
            </p>
            <p>
              The exclusive Josiane Laure Method is more than just a treatment – it's a holistic approach to
              scalp and hair health. Using highly concentrated, organic botanical oils from France, this method
              awakens energy points on the head, improves circulation, and restores balance throughout your entire body.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="text-center mb-lg">Benefits of Head Spa</h2>

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

      {/* Services */}
      <section className="section services-detail-section">
        <div className="container">
          <h2 className="text-center mb-lg">Our Head Spa Treatments</h2>

          <div className="services-detail-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-header">
                  <h3>{service.title}</h3>
                  <div className="service-meta">
                    <span className="duration">⏱️ {service.duration}</span>
                    <span className="price">{service.price}</span>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <a href="#booking" className="btn btn-primary">
                  Book This Treatment
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section">
        <div className="container">
          <h2 className="text-center mb-md">See Head Spa in Action</h2>
          <p className="text-center mb-lg">Watch our signature head spa treatment</p>

          <div className="video-container">
            <div className="video-placeholder">
              🎥 Video: Japanese Head Spa Experience
              <p>Experience the relaxation and rejuvenation of our signature treatment</p>
            </div>
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

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Ultimate Relaxation?</h2>
            <p>Book your Japanese Head Spa treatment today and discover the transformative power of the Josiane Laure Method</p>
            <a href="#booking" className="btn btn-accent btn-large">
              Book Your Treatment Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadSpa;
