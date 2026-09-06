import React, { useState } from 'react';
import drawings from './ImportAllDrawings';
import './App.css';
import { Link } from 'react-router-dom';

function Drawings() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="photo-page-container">
        <div className="photo-grid-container">
          {drawings.map((image, index) => (
            <div key={index} className="photo-grid-item-container" onClick={() => handleImageClick(image)}>
              <img
                src={image.src}
                alt={`Drawing ${index + 1}`}
                className="photo-grid-item"
              />
              <div className="photo-image-label">
                {image.name}
              </div>
            </div>
          ))}
        </div>
        <Link to="/art" className="subpage-back">&#8592;</Link>

      </div>
      
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage.src} alt="Selected" className="modal-image" />
            <div className="modal-label">
              {selectedImage.name} - {selectedImage.location} - {selectedImage.date}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drawings; 