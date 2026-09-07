

import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Engineering() {
  return (
    <div className="App">
        <div className="center-container">
        <div className="subpage-container">

              <div className="subpage-header">art</div>


                <div className="subpage-text engineering-text">
                    I enjoy creating things that feel beautiful to me. I've always loved people photography (<Link to="/photos" className="subpage-text-link">street</Link>, <Link to="https://www.communityphotobooth.com/charlotte-rosario" className="subpage-text-link">portrait</Link>, <Link to="https://photographing2020.onuniverse.com/" className="subpage-text-link" target="_blank">social justice</Link>——anything
                    that involves humans because I think every human is fascinating and beautiful). I work part-time as a <Link to="https://www.communityphotobooth.com/charlotte-rosario" className="subpage-text-link" target="_blank">portrait photographer</Link> for <Link to="https://www.communityphotobooth.com/" className="subpage-text-link" target="_blank">The Community Photobooth</Link>, but for fun, I love to capture <Link to="/photos" className="subpage-text-link">unique sights and moments in my 
                    community</Link> through the lens of my Nikon D810. I've also been experimenting with drawing—-mostly <Link to="/drawings" className="subpage-text-link">sketching the faces
                    of people I love</Link>--and with <Link to="/mixedmedia" className="subpage-text-link">mixed media</Link>, most of which are hanging on (or falling off of) the walls 
                    of my childhood bedroom. 
                </div>
                <Link to="/" className="subpage-back">&#8592;</Link>
              </div>
            
        </div>
    
      {/* <ContactInfo /> */}

   

    </div>
  );
}

export default Engineering;

