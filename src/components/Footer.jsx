import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Yukie Natori New York</h3>
            <p className="footer-description">
              Manhattan's premium spa and beauty salon specializing in hairstyles, nails, and massages.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="social-icon">📷</i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="social-icon">📘</i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/spa-services">Spa Services</Link></li>
              <li><Link to="/price-list">Price List</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/head-spa">Head Spa</Link></li>
              <li><Link to="/massage">Massage</Link></li>
              <li><Link to="/face">Facial</Link></li>
              <li><Link to="/nail">Nail</Link></li>
              <li><Link to="/hair">Hair</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <strong>Address:</strong><br />
                39 West 56th Street<br />
                New York, NY 10019
              </li>
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:info@yukienatori-newyork.com">info@yukienatori-newyork.com</a>
              </li>
              <li>
                <strong>Hours:</strong><br />
                Mon-Sat: 10am - 8pm<br />
                Sun: 10am - 8pm
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/accessibility">Accessibility Statement</Link>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Yukie Natori New York. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
