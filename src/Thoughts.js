

import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Engineering() {
  return (
    <div className="App">
        <div className="center-container">
        <div className="subpage-container">

                <div className="subpage-header">thoughts</div>


                  <div className="subpage-text">
                   I like to think and talk and organize brain-dump-content into lists. In high school, 
                   I co-led <Link to="https://epics02.wordpress.com/" className="subpage-text-link" target="_blank">EPIC (Existential Philosophy Interdisciplinary Conversations)</Link>, a club that held biweekly discussions with students and faculty 
                   on topics like Godel incompleteness, category theory, and AI ethics. I tend to spend my free time <Link to="/books" className="subpage-text-link">reading books</Link>, <Link to="/articles" className="subpage-text-link">skimming articles</Link>, <Link to="/questions" className="subpage-text-link">asking questions</Link>, and documenting the things I see and experience (<Link to="/travel" className="subpage-text-link">I love to travel</Link>). 
                  </div>
                  <Link to="/" className="subpage-back">&#8592;</Link>
                </div>
                      


                </div>
    
      {/* <ContactInfo /> */}

   

    </div>
  );
}

export default Engineering;

