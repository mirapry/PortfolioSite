

import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Engineering() {
  return (
    <div className="App">
        <div className="center-container">
          <div className="subpage-container">

            <div className="subpage-header">engineering</div>
          

              <div className="subpage-text engineering-text">

              I love building things. Growing up, my bedroom floor was littered with magna-tiles, 
              legos, and cardboard boxes transformed into DIY robo-suits and pinball machines. By 
              middle school, I traded hot glue for Java, programming robots on an all-girls FTC 
              robotics team, <Link className="subpage-text-link" to="https://mrobotics8381.wordpress.com/" target="_blank">Team M #8381</Link>,to 
              stack blocks into towers and sink whiffle balls into nets. In high 
              school, at <Link className="subpage-text-link" to="https://nuevaschool.org/">Nueva</Link>, I led <Link className="subpage-text-link" to="https://sites.google.com/nuevaschool.org/istudio/welcome?pli=1" target="_blank">Invention Studio</Link>, a social-impact incubator where I mentored high 
              schoolers in design thinking and engineering. There, I got to bring my own ideas to life: <Link className="subpage-text-link" to="https://greenswingenergy.com/" target="_blank">GreenSwing</Link> (a patent-pending door-powered battery charger), <Link className="subpage-text-link" to="https://joinknowme.vercel.app/home" target="_blank">KnowMe</Link> (a teen-to-teen 
              peer support app), and <Link className="subpage-text-link" to="https://searchmentalhealth.com/" target="_blank">SearchMentalHealth</Link> (an AI navigator for services). In summer 
              2025, I designed and shipped product features from concept to code for <Link className="subpage-text-link" to="https://somethings.com/" target="_blank">Somethings</Link>, a NYC startup connecting teens with certified peer specialists. Currently, I work at a stealth early-stage neurotech startup in SF! 

              </div>
              <Link to="/" className="subpage-back">&#8592;</Link>
          </div>
                   
            
        </div>
    
      {/* <ContactInfo /> */}
   

    </div>
  );
}

export default Engineering;

