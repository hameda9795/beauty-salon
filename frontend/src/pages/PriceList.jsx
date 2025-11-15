import React from 'react';
import Hero from '../components/Hero';
import './PriceList.css';

const PriceList = () => {
  const priceCategories = [
    {
      category: 'Laser Treatments',
      services: [
        { name: 'ClearLift Face (per session)', price: '$450' },
        { name: 'ClearLift Face (3 sessions)', price: '$1,000' },
        { name: 'ClearLift Face (6 sessions)', price: '$1,755' },
        { name: 'IPL Face', price: '$450' },
        { name: 'IPL Neck', price: '$360' },
        { name: 'IPL Face + Neck', price: '$680' }
      ]
    },
    {
      category: 'Laser Hair Removal',
      services: [
        { name: 'Small Area', price: '$125' },
        { name: 'Medium Area', price: '$225' },
        { name: 'Large Area', price: '$300' },
        { name: 'Full Body', price: '$1,300' }
      ]
    },
    {
      category: 'HydraFacial',
      services: [
        { name: 'Single Treatment', price: '$295' },
        { name: 'Package of 3', price: '$660' },
        { name: 'Package of 6', price: '$1,150' }
      ]
    },
    {
      category: 'Hair Services',
      services: [
        { name: 'Haircut (Women)', price: '$80-$135' },
        { name: 'Haircut (Men)', price: '$60-$80' },
        { name: 'Children\'s Haircut (under 10)', price: '$50' },
        { name: 'Blowout', price: '$65-$85' },
        { name: 'Single Color', price: '$125-$155' },
        { name: 'Highlights Full', price: '$300+' },
        { name: 'Balayage', price: '$300+' },
        { name: 'Japanese Straightening Full Head', price: '$500+' },
        { name: 'Keratin Treatment - Brazilian Blowout', price: '$400+' },
        { name: 'Regular Perm', price: '$250-$600' },
        { name: 'Digital Perm', price: '$350+' }
      ]
    },
    {
      category: 'Nail Services',
      services: [
        { name: 'Gel Manicure (one color)', price: '$70' },
        { name: 'Gel Pedicure (one color)', price: '$75' },
        { name: 'Gel Fill In', price: '$100' },
        { name: 'Gel Nail Art (per nail)', price: '+$5-$15' },
        { name: 'Happy Hour Pedicure', price: '$70' },
        { name: 'SpaRitual Organic Aroma Spa Pedicure', price: '$125' },
        { name: 'Regular Manicure', price: '$45' },
        { name: 'Regular Pedicure', price: '$55' },
        { name: 'Nail Removal', price: '$25' }
      ]
    },
    {
      category: 'Head Spa',
      services: [
        { name: 'Signature Head Spa Experience (75 min)', price: '$195' },
        { name: 'HydraFacial Keravive + Head Spa (75-90 min)', price: '$350' },
        { name: 'Dry Head Spa + Eye Massage (50 min)', price: '$125' },
        { name: 'Dry Head Spa + Back Massage (80 min)', price: '$155' }
      ]
    },
    {
      category: 'Massage Therapy',
      services: [
        { name: 'Signature Swedish Massage (60 min)', price: '$120' },
        { name: 'Signature Swedish Massage (90 min)', price: '$155' },
        { name: 'Deep Tissue Massage (60 min)', price: '$135' },
        { name: 'Deep Tissue Massage (90 min)', price: '$175' },
        { name: 'Hot Stone Massage (60 min)', price: '$135' },
        { name: 'Hot Stone Massage (90 min)', price: '$155' },
        { name: 'Aromatherapy Massage (60 min)', price: '$135' },
        { name: 'Aromatherapy Massage (90 min)', price: '$175' },
        { name: 'Bamboo Massage (60 min)', price: '$155' },
        { name: 'Bamboo Massage (90 min)', price: '$195' },
        { name: 'Lymphatic Drainage (60 min)', price: '$170' },
        { name: 'Scalp Massage (30 min)', price: '$30' },
        { name: 'Face Massage (30 min)', price: '$30' }
      ]
    },
    {
      category: 'Facial Treatments',
      services: [
        { name: 'Signature European Facial', price: '$120' },
        { name: 'European Facial (3 pack)', price: '$270' },
        { name: 'European Facial (6 pack)', price: '$480' },
        { name: 'Oxygen Facial', price: '$185' },
        { name: 'Chemical Peel - Face', price: '$145' },
        { name: 'Chemical Peel - Neck & Chest', price: '$175' }
      ]
    },
    {
      category: 'Body Treatments',
      services: [
        { name: 'Float Therapy (Single)', price: '$89' },
        { name: 'Float Therapy (3 pack)', price: '$249' },
        { name: 'Float Therapy (5 pack)', price: '$379' },
        { name: 'Body Scrub (Upper body, 30 min)', price: '$90' },
        { name: 'Body Scrub (Full body, 60 min)', price: '$180' },
        { name: 'Body Wrap (Partial, 45 min)', price: '$125' },
        { name: 'Body Wrap (Full body, 90 min)', price: '$250' }
      ]
    },
    {
      category: 'Waxing',
      services: [
        { name: 'Brazilian', price: '$60' },
        { name: 'Bikini', price: '$35' },
        { name: 'Full Leg', price: '$68' },
        { name: 'Half Leg', price: '$38' },
        { name: 'Full Arm', price: '$38' },
        { name: 'Half Arm', price: '$32' },
        { name: 'Chest', price: '$28' },
        { name: 'Underarms', price: '$10' },
        { name: 'Lip or Chin', price: '$20' }
      ]
    },
    {
      category: 'Eyelash Extensions',
      services: [
        { name: 'Classic Mink - Real Look', price: '$125' },
        { name: 'Classic Mink - Natural Look', price: '$150' },
        { name: 'Classic Mink - Glamour Look', price: '$175' },
        { name: 'Flat Lash - Real Look', price: '$135' },
        { name: 'Flat Lash - Natural Look', price: '$160' },
        { name: 'Flat Lash - Glamour Look', price: '$185' },
        { name: 'Cashmere - Real Look', price: '$140' },
        { name: 'Cashmere - Natural Look', price: '$170' },
        { name: 'Cashmere - Glamour Look', price: '$195' },
        { name: 'Touch Up (2-3 weeks)', price: '$70-$130' }
      ]
    }
  ];

  return (
    <div className="price-list-page">
      <Hero
        title="Price List"
        subtitle="Transparent pricing for all our premium services"
        ctaText="Book Now"
        ctaLink="#booking"
      />

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content text-center">
            <h2>Our Services & Pricing</h2>
            <p>
              We believe in transparent, honest pricing. All prices listed below are starting prices and may vary
              based on specific needs, hair length, or treatment customization. Please consult with our specialists
              for accurate quotes.
            </p>
            <div className="price-note">
              <p>
                <strong>Package Savings:</strong> Save up to 35% when you purchase treatment packages!
              </p>
              <p>
                <strong>First Time Client:</strong> Enjoy 15% off your first visit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="section price-tables-section">
        <div className="container">
          {priceCategories.map((category, index) => (
            <div key={index} className="price-category">
              <h2 className="category-title">{category.category}</h2>

              <div className="price-table">
                {category.services.map((service, idx) => (
                  <div key={idx} className="price-row">
                    <span className="service-name">{service.name}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment & Policies */}
      <section className="section policies-section">
        <div className="container">
          <div className="policies-grid">
            <div className="policy-card">
              <h3>💳 Payment Options</h3>
              <ul>
                <li>Cash</li>
                <li>All major credit cards</li>
                <li>Apple Pay & Google Pay</li>
                <li>Gift certificates available</li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>📅 Cancellation Policy</h3>
              <ul>
                <li>24-hour advance notice required</li>
                <li>Late cancellations subject to 50% charge</li>
                <li>No-shows charged full price</li>
                <li>Please arrive 10 minutes early</li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>🎁 Packages & Memberships</h3>
              <ul>
                <li>Multi-session packages available</li>
                <li>Monthly membership programs</li>
                <li>Significant savings on bundles</li>
                <li>Gift cards for any occasion</li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>ℹ️ Good to Know</h3>
              <ul>
                <li>Consultations are complimentary</li>
                <li>Gratuity not included in prices</li>
                <li>Prices subject to change</li>
                <li>Custom treatments available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book?</h2>
            <p>Choose your perfect treatment and schedule your appointment today</p>
            <a href="#booking" className="btn btn-accent btn-large">
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceList;
