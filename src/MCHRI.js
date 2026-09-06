import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const MCHRI = () => {
  return (
    <div className="App">
      <div className="main-container">
        <img
          src={"other-assets/MCHRI_poster.pptx.jpg"}
          alt={`Stanford MCRHI Poster - Mira Pry`}
          style={{ width: "95vw", height: "auto" }}
        />
        <br />
        <br />
        <img
          src={"other-assets/Stanford MCHRI - Charlotte Rosario.jpeg"}
          alt={`Stanford MCRHI Poster - Mira Pry`}
          style={{ width: "auto", height: "95vh" }}
        />
        <br />
        <br />
        <br />
      </div>
      <Link to="/" className="subpage-back">&#8592;</Link>
    </div>
  );
}

export default MCHRI;
