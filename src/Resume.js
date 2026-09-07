import React from 'react';
import './App.css';

const Resume = () => {
  return (
    <div className="App">
      <div className="main-container">
        <iframe
          src="other-assets/Resume - Charlotte Rosario.pdf"
          title="Mira Pry's Resume"
          style={{
            width: '100vw',
            height: '100vh',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
}

export default Resume;
