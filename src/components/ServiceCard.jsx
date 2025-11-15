import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, link, image }) => {
  return (
    <Link to={link} className="service-card">
      <div className="service-card-icon">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span className="icon-text">{icon || '✨'}</span>
        )}
      </div>
      <h3 className="service-card-title">{title}</h3>
      {description && <p className="service-card-description">{description}</p>}
      <span className="service-card-link">Learn More →</span>
    </Link>
  );
};

export default ServiceCard;
