import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Travel() {
  const destinations = [
    'Boston, Massachusetts',
    'Breckenridge, Colorado',
    'Charlotte, North Carolina',
    'Costa Rica',
    'France',
    'Inian Islands, Alaska',
    'Gustavis, Alaska',
    'Juneau, Alaska',
    'Kaua\'i, Hawaii',
    'Maui, Hawaii',
    'Kona, Hawaii',
    'Hilo, Hawaii',
    'Los Angeles',
    'San Diego, California',
    'Santa Barbara, California',
    'Monterey, California',
    'Long Beach, California',
    'Anaheim, California',
    'Carmel, California',
    'Sacramento, California',
    'Lake Tahoe, California',
    'Shasta, California',
    'Fresno, California',
    'San Jose, California',
    'San Francisco, California',
    'Las Vegas, Nevada',
    'Reno, Nevada',
    'London',
    'New Haven, Connecticut',
    'New York City',
    'Oxford, England',
    'Philadelphia, Pennsylvania',
    'Phoenix, Arizona',
    'Plymouth Notch, Vermont',
    'Portland, Oregon',
    'Porto, Portugal',
    'Lisbon, Portugal',
    'Aveiro, Portugal',
    'Algarve, Portugal',
    'Princeton, New Jersey',
    'Rome, Italy',
    'Positano, Italy',
    'Florence, Italy',
    'Venice, Italy',
    'Sorrento, Italy',
    'Capri, Italy',
    'Salt Lake City, Utah',
    'San Antonio, Texas',
    'Houston, Texas',
    'Vancouver',
    'Washington D.C.',
    'Wyoming',
    'Providence, Rhode Island',
    'Taiwan',
    'Tokyo, Japan',
    'Kyoto, Japan',
    'Brooklyn',
    'Munich, Germany',
    'Salzburg, Austria',
    'Innsbruck, Austria',
    'Zurich, Switzerland',
    'Lucerne, Switzerland'
  ];

  return (
    <div className="App">
      <div className="list-page-container">
        <div className="list-page-header">places i've visited, lived in, and loved</div>

        <ul className="clean-list">
          {destinations.map((destination, index) => (
            <li key={index} className="list-item-compact">
              <span className="destination-name">{destination}</span>
            </li>
          ))}
        </ul>
        <div className="last-updated">last updated 9/1/25</div>
        <Link to="/thoughts" className="subpage-back">&#8592;</Link>
      </div>
    </div>
  );
}

export default Travel; 