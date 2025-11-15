import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    preferredDate2: '',
    preferredTime2: '',
    service: 'Hair',
    message: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      preferredDate2: '',
      preferredTime2: '',
      service: 'Hair',
      message: '',
      consent: false
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="booking-form-section" id="booking">
      <div className="container">
        <h2 className="text-center">Online Booking</h2>
        <p className="text-center mb-lg">Book your appointment today</p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Preferred Time *</label>
              <input
                type="time"
                name="preferredTime"
                required
                value={formData.preferredTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Alternative Date *</label>
              <input
                type="date"
                name="preferredDate2"
                required
                value={formData.preferredDate2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Alternative Time *</label>
              <input
                type="time"
                name="preferredTime2"
                required
                value={formData.preferredTime2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>I would like to *</label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="Hair">Hair</option>
              <option value="Nail">Nail</option>
              <option value="Spa">Spa</option>
              <option value="Massage">Massage</option>
              <option value="Facial">Facial</option>
              <option value="Head Spa">Head Spa</option>
              <option value="Laser Skin">Laser Skin</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Additional message or special requests..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleChange}
              />
              <span>I agree to the privacy policy and consent to be contacted *</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-large">
            Book Treatment
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
