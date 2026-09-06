

import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Engineering() {
  return (
    <div className="App">
        <div className="center-container">
        <div className="subpage-container">

            <div className="subpage-header">research</div>


              <div className="subpage-text">
              My research experience has spanned brains, language, and mental health. At <Link to="https://med.stanford.edu/cibsr.html" className="subpage-text-link" target="_blank">Stanford's Center for Interdisciplinary Brain Science Research</Link>, I
               worked with structural MRI scans and behavioral data to uncover links between 
               brain structure and mental health--work that earned me recognition as 
               a <Link to="https://www.regeneronstsi.org/" className="subpage-text-link" target="_blank">Regeneron Science Talent Search Top 40 Winner</Link> and a 
               presenter at <Link to="/mchri" className="subpage-text-link">Stanford's Maternal and Child Health Research Institute symposium (2024)</Link>. Prior, 
               I explored how different age groups talk about mental illness on social media, applying natural 
               language processing to trace linguistic patterns. That project turned 
               into publications and presentations at <Link to="https://underline.io/lecture/90669-an-exploratory-analysis-of-differential-linguistic-features-of-depression-in-adolescents-and-adults-via-social-media-video" className="subpage-text-link" target="_blank">EMNLP 2023</Link> and <Link to="https://www.ranlp.org/2023/program/poster-sessions/poster-100" className="subpage-text-link" target="_blank">RANLP 2023</Link>, 
               with proceedings published in the <Link to="https://aclanthology.org/2023.ranlp-stud.4/" className="subpage-text-link" target="_blank">Association of Computational Linguistics</Link>. 
               More recently, I worked with the <Link to="https://cyborgpsychology.mit.edu/" className="subpage-text-link" target="_blank">Cyborg Psychology group</Link> at the MIT Media Lab on mech-interp for psychological risks in AI chatbots.
              
              </div>
              <Link to="/" className="subpage-back">&#8592;</Link>
            </div>
                  
                  
                   
            
        </div>
    
      {/* <ContactInfo /> */}

   

    </div>
  );
}

export default Engineering;

