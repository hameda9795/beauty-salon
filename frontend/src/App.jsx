import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HeadSpa from './pages/HeadSpa';
import SpaServices from './pages/SpaServices';
import Facial from './pages/Facial';
import PriceList from './pages/PriceList';
import Nail from './pages/Nail';
import Hair from './pages/Hair';
import LaserSkin from './pages/LaserSkin';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/head-spa" element={<HeadSpa />} />
            <Route path="/spa-services" element={<SpaServices />} />
            <Route path="/face" element={<Facial />} />
            <Route path="/price-list" element={<PriceList />} />

            <Route path="/nail" element={<Nail />} />
            <Route path="/hair" element={<Hair />} />
            <Route path="/laser-skin" element={<LaserSkin />} />

            {/* Placeholder routes - can be implemented later */}
            <Route path="/massage" element={<PlaceholderPage title="Massage Therapy" />} />
            <Route path="/specials" element={<PlaceholderPage title="Special Offers" />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="/shop" element={<PlaceholderPage title="Shop" />} />
            <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/accessibility" element={<PlaceholderPage title="Accessibility Statement" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Placeholder component for pages not yet implemented
const PlaceholderPage = ({ title }) => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2rem'
  }}>
    <h1>{title}</h1>
    <p>This page is coming soon!</p>
    <a href="/" style={{ marginTop: '2rem', color: '#D4AF37', textDecoration: 'underline' }}>
      Return to Home
    </a>
  </div>
);

export default App;
