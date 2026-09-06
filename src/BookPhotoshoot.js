import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import portfolioPhotos from './ImportPhotoshootPortfolio';

const CALENDLY_URL = 'https://calendly.com/charlotte-photobooth/booking';
const SLIDE_INTERVAL = 4500;

function BookPhotoshoot() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const calendlyRef = useRef(null);

  useEffect(() => {
    if (portfolioPhotos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % portfolioPhotos.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const container = calendlyRef.current;
    if (!container) return;

    const initWidget = () => {
      if (!window.Calendly || !calendlyRef.current) return;
      calendlyRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: calendlyRef.current,
      });
    };

    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);

    if (window.Calendly) {
      initWidget();
      return;
    }

    if (existing) {
      existing.addEventListener('load', initWidget);
      return () => existing.removeEventListener('load', initWidget);
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <div className="booking-page-layout">
        <div className="subpage-header">book a photoshoot</div>

        <div className="subpage-text booking-intro">
          <p>
            Hi, I'm Charlotte. I'm a family, portrait, and event photographer—I love helping people hold onto real moments in photos. I've been shooting on my Nikon since I was 12, and I also founded <a href="https://www.communityphotobooth.com/" className="subpage-text-link" target="_blank" rel="noopener noreferrer">The Community Photobooth</a>.
          </p>
          <p>
            <strong>Specialties:</strong> family, portrait, headshots, event, even pet photography, and more.<br />
            <strong>Where I shoot:</strong> Stanford, Palo Alto, Menlo Park, San Mateo, Hillsborough, Burlingame, Belmont, Millbrae, and nearby areas.<br />
            <strong>Pricing:</strong> $65 for a full half-hour session; $100 per hour for sessions/events of an hour or longer. Unlimited photos, and editing is included at no extra cost.
          </p>
          <p>
            Pick a time in the calendar below to book.
          </p>
        </div>

        {portfolioPhotos.length > 0 && (
        <div className="booking-portfolio-section">
          <div className="booking-gallery" onClick={() => setSelectedImage(portfolioPhotos[currentIndex])}>
            {portfolioPhotos.length > 1 && (
              <>
                <button
                  type="button"
                  className="booking-gallery-arrow booking-gallery-prev"
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i - 1 + portfolioPhotos.length) % portfolioPhotos.length); }}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="booking-gallery-arrow booking-gallery-next"
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i + 1) % portfolioPhotos.length); }}
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}
            <div className="booking-gallery-track">
              {portfolioPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`booking-gallery-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <img src={photo.src} alt={photo.label} className="booking-gallery-img" />
                </div>
              ))}
            </div>
            {portfolioPhotos.length > 1 && (
            <div className="booking-gallery-dots">
              {portfolioPhotos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`booking-gallery-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  aria-label={`View slide ${i + 1}`}
                />
              ))}
            </div>
            )}
          </div>
        </div>
        )}

        <div className="booking-calendly-wrap">
          <div ref={calendlyRef} className="booking-calendly-inline" />
        </div>

        <Link to="/" className="subpage-back">&#8592;</Link>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.label} className="modal-image" />
            <div className="modal-label">{selectedImage.label}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookPhotoshoot;
