import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function ContactInfo() {
    return (

<div className="contact-info">
        <a href="mailto:charlotterosario@gmail.com" className="contact-info-item">send an email</a>
        <Link to="/book-photoshoot" className="contact-info-item">book a photoshoot</Link>
        <a href="https://www.linkedin.com/in/mira-pry-494776377/" target="_blank" rel="noopener noreferrer" className="contact-info-item">stalk linkedin</a>
        <a href="https://github.com/charava" target="_blank" rel="noopener noreferrer" className="contact-info-item">poke around github</a>
        <a href="https://youtube.com/@charava" target="_blank" rel="noopener noreferrer" className="contact-info-item">watch youtube</a>
      </div>
    )
}

export default ContactInfo;