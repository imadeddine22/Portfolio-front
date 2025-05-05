import React, { useState } from 'react';
import '../styles/services.css';

const cards = [
  { 
    id: 1, 
    title: 'Video Editor Portfolio', 
    subtitle: 'imad Video Editing Work', 
    footer: 'Click to view',
    link: 'https://imadeddine22.github.io/index.html/' 
  },
  { 
    id: 2, 
    title: 'Amina Portfolio', 
    subtitle: 'Web Development Projects', 
    footer: 'Click to view',
    link: 'https://imadeddine22.github.io/amina.html/' 
  },
  { id: 3, title: 'Service 3', subtitle: 'Coming Soon', footer: 'Your Brand' },
  { id: 4, title: 'Service 4', subtitle: 'Coming Soon', footer: 'Your Brand' },
  { id: 5, title: 'Service 5', subtitle: 'Coming Soon', footer: 'Your Brand' },
];

const testimonials = [
  { id: 1, name: 'Moha', comment: 'Excellent work! Delivered on time.', rating: 5 },
  { id: 2, name: 'Amina ', comment: 'Great communication skills.', rating: 4 },
  { id: 3, name: 'Sarah', comment: 'Highly recommended!', rating: 5 },
];

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="services-container">
      <div className="testimonials-section">
        <h3>Client Testimonials</h3>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <span className="testimonial-name">{testimonial.name}</span>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
            </div>
            <p className="testimonial-comment">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>

      <div className="main-content">
        <div className="cards-wrapper">
          {cards.map((card, index) => {
            let position = "current-card";

            if (index < currentIndex) {
              position = "prev-card";
            } else if (index > currentIndex) {
              position = "next-card";
            }

            return (
              <div
                key={card.id}
                className={`card ${position}`}
                onClick={() => handleCardClick(card.link)}
              >
                <p className="heading">{card.title}</p>
                <p>{card.subtitle}</p>
                <p className="footer">{card.footer}</p>
              </div>
            );
          })}
        </div>

        <div className="buttons">
          <button onClick={prevCard}>Back</button>
          <button onClick={nextCard}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Services;