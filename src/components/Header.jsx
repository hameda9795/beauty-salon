import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <h2>Yukie Natori New York</h2>
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/head-spa">Head Spa</Link></li>
            <li><Link to="/spa-services">Spa Services</Link></li>
            <li><Link to="/laser-skin">Laser skin</Link></li>
            <li><Link to="/massage">Massage</Link></li>
            <li><Link to="/face">Face</Link></li>
            <li><Link to="/nail">Nail</Link></li>
            <li><Link to="/hair">Hair</Link></li>
            <li><Link to="/specials">Specials</Link></li>
            <li
              className="dropdown"
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
            >
              <a href="#more">More</a>
              <ul className={`dropdown-menu ${isMoreDropdownOpen ? 'show' : ''}`}>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/price-list">Price List</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </li>
          </ul>
        </nav>

        <Link to="/shop" className="shop-btn btn btn-accent">
          Shop
        </Link>
      </div>
    </header>
  );
};

export default Header;
