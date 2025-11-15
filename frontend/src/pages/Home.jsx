import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'Spa',
      description: 'Indulge in our luxurious spa treatments for complete relaxation and rejuvenation.',
      icon: '💆',
      link: '/spa-services'
    },
    {
      title: 'Nail',
      description: 'Premium Japanese nail care with gel manicures, pedicures, and nail art.',
      icon: '💅',
      link: '/nail'
    },
    {
      title: 'Hair',
      description: 'Expert hair styling, coloring, and treatments from our skilled stylists.',
      icon: '💇',
      link: '/hair'
    },
    {
      title: 'Massage',
      description: 'Therapeutic massages including Swedish, deep tissue, and hot stone.',
      icon: '🙌',
      link: '/massage'
    },
    {
      title: 'Facial',
      description: 'Advanced facial treatments to restore your skin\'s natural glow.',
      icon: '✨',
      link: '/face'
    },
    {
      title: 'Laser Treatments',
      description: 'State-of-the-art laser skin treatments for various skin concerns.',
      icon: '⚡',
      link: '/laser-skin'
    }
  ];

  const featuredServices = [
    {
      title: 'Japanese Head Spa',
      description: 'Experience the transformative Josiane Laure Method - a unique scalp therapy that awakens energy points and restores balance.',
      price: 'From $125',
      link: '/head-spa'
    },
    {
      title: 'HydraFacial MD',
      description: 'Advanced facial treatment that cleanses, extracts, and hydrates your skin for immediate, visible results.',
      price: 'From $295',
      link: '/face'
    },
    {
      title: 'Lymphatic Drainage',
      description: 'Holistic massage technique that promotes natural detoxification and reduces swelling.',
      price: 'From $170',
      link: '/massage'
    }
  ];

  return (
    <div className="home">
      <Hero
        title="Yukie Natori New York"
        subtitle="Escape to serenity at Yukie Natori New York Salon & Spa in Midtown Manhattan. Experience premium beauty services with a Japanese touch."
        ctaText="Book Treatment"
        ctaLink="#booking"
      />

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>From France to Japan... and Now to New York</h2>
              <p>
                Welcome to Yukie Natori New York, Manhattan's premier destination for luxury spa and beauty services.
                Founded by Yukie Natori, our salon brings together the best of French elegance and Japanese precision.
              </p>
              <p>
                We specialize in the exclusive <strong>Josiane Laure Method</strong>, a transformative head spa and
                scalp therapy using highly concentrated, organic botanical oils from France. This treatment awakens
                energy points on the head, improves circulation, and restores balance throughout your entire body.
              </p>
              <p>
                Our experienced team is dedicated to providing exceptional service in a serene, welcoming environment.
                Whether you're seeking a relaxing massage, a stunning new hairstyle, or rejuvenating facial treatment,
                we're here to help you look and feel your best.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>🏛️</span>
                <p>Yukie Natori Salon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-section">
        <div className="container">
          <h2 className="text-center mb-md">Our Services</h2>
          <p className="text-center section-subtitle mb-lg">
            Discover our comprehensive range of beauty and wellness treatments
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section featured-section">
        <div className="container">
          <h2 className="text-center mb-md">Featured Treatments</h2>
          <p className="text-center section-subtitle mb-lg">
            Experience our signature services
          </p>

          <div className="featured-grid">
            {featuredServices.map((service, index) => (
              <div key={index} className="featured-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="featured-footer">
                  <span className="price">{service.price}</span>
                  <a href={service.link} className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="section media-section">
        <div className="container">
          <h2 className="text-center mb-md">As Seen In</h2>
          <p className="text-center mb-lg">Leading Beauty & Fashion Magazines</p>

          <div className="media-logos">
            <div className="media-logo">VOGUE</div>
            <div className="media-logo">Harper's BAZAAR</div>
            <div className="media-logo">Cosmopolitan</div>
            <div className="media-logo">ELLE</div>
          </div>
        </div>
      </section>

      {/* 360 Tour Section */}
      <section className="section tour-section">
        <div className="container">
          <div className="tour-content">
            <h2>Virtual Tour</h2>
            <p>Take a 360° virtual tour of our luxurious salon and spa facilities</p>
            <button className="btn btn-accent">View 360° Tour</button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section blog-section">
        <div className="container">
          <h2 className="text-center mb-md">Latest News & Tips</h2>

          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-image">
                <div className="placeholder-image">📰</div>
              </div>
              <h3>Anti-Cellulite Massage</h3>
              <p>Discover how our specialized massage techniques can help reduce the appearance of cellulite...</p>
              <a href="/blog/anti-cellulite-massage" className="blog-link">Read More →</a>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <div className="placeholder-image">💆</div>
              </div>
              <h3>Body Treatments Guide</h3>
              <p>A comprehensive guide to our body wrap and scrub treatments for smooth, glowing skin...</p>
              <a href="/blog/body-treatments" className="blog-link">Read More →</a>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <div className="placeholder-image">💇</div>
              </div>
              <h3>How to Get Healthy Hair</h3>
              <p>Expert tips and treatments for maintaining beautiful, healthy hair all year round...</p>
              <a href="/blog/healthy-hair" className="blog-link">Read More →</a>
            </article>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      {/* Location Section */}
      <section className="section location-section">
        <div className="container">
          <h2 className="text-center mb-md">Visit Us</h2>

          <div className="location-content">
            <div className="location-info">
              <h3>📍 Location</h3>
              <p>39 West 56th Street<br />New York, NY 10019</p>

              <h3>📧 Email</h3>
              <p>
                <a href="mailto:info@yukienatori-newyork.com">info@yukienatori-newyork.com</a>
              </p>

              <h3>🕐 Hours</h3>
              <p>
                Monday - Saturday: 10:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 8:00 PM
              </p>
            </div>

            <div className="location-map">
              <div className="placeholder-map">
                🗺️ Map Location
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
