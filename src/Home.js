

import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';

// add writing blogs page (// history research paper on 20th century mental health )
// invention ideas list page
// add photos to travel page


function ArtsyHome() {
  return (
    <div className="App">
        <div className="center-container">
            <div className="laptop-container">
                    <img className='home-sketch-img' src='MiraScreaming.png' alt="mira pry"/>

                    <Link to="https://www.cs.stanford.edu/" target="_blank"><img className='sticker stanford' src='stickers/stanford.png' alt="stanford logo sticker"/></Link>
                    <Link to="https://www.nuevaschool.org/" target="_blank"><img className='sticker nueva' src='stickers/nueva.png' alt="nueva logo sticker"/></Link>
                    <Link to="https://sites.google.com/nuevaschool.org/istudio/welcome?pli=1" target="_blank"><img className='sticker istudio' src='stickers/istudio.png' alt="istudio logo sticker"/></Link>
                    
                    <Link to="https://www.fastcompany.com/91395253/kids-arent-in-the-boardroom-but-theyre-shaping-whats-next" target="_blank"><img className='sticker unicef' src='stickers/unicef.png' alt="unicef logo sticker"/></Link>
                    <Link to="https://joinknowme.vercel.app/home" target='_blank'><img className='sticker knowme' src='stickers/knowme.png' alt="knowme logo sticker"/></Link>
                    <Link to="https://www.societyforscience.org/regeneron-sts/2025-student-finalists/charlotte-rosario/" target="_blank"><img className='sticker regeneron' src='stickers/regeneron.png' alt="regeneron logo sticker"/></Link>
                    <Link to="/art" ><img className='sticker camera' src='stickers/camera.png' alt="camera logo sticker"/></Link>
                    <Link to="/research"><img className='sticker pandastudy' src='stickers/pandastudy.png' alt="pandastudy logo sticker"/></Link>
                    <Link to="https://www.communityphotobooth.com/" target="_blank"><img className='sticker communityphotobooth' src='stickers/communityphotobooth.png' alt="communityphotobooth logo sticker"/></Link>
                    <Link to="https://epics02.wordpress.com/" target="_blank"><img className='sticker epic' src='stickers/epic.png' alt="epic logo sticker"/></Link>
                    <Link to="https://www.risefortheworld.org/winners/charlotte-ava-rosario" target="_blank"><img className='sticker rise' src='stickers/rise.png' alt="rise logo sticker"/></Link>
                    <Link to="https://aclanthology.org/2023.ranlp-stud.4/" target="_blank"><img className='sticker acl' src='stickers/acl.png' alt="acl logo sticker"/></Link>
                    <Link to="https://somethings.com/" target="_blank"><img className='sticker somethings' src='stickers/somethings.png' alt="somethings logo sticker"/></Link>
                    <Link to="https://www.youtube.com/watch?v=EpYAJdZWzZ4" target="_blank"><img className='sticker documentary' src='stickers/documentary.png' alt="documentary logo sticker"/></Link>
                    <Link to="https://smcbhrsblog.org/2024/05/02/celebrating-community-at-the-2024-tony-hoffman-awards/" target="_blank"><img className='sticker smc' src='stickers/smc.png' alt="smc logo sticker"/></Link>
                    <Link to="https://greenswingenergy.com/" target="_blank"><img className='sticker greenswing' src='stickers/greenswing.png' alt="greenswing logo sticker"/></Link>
                    <Link to="https://www.youtube.com/watch?v=MMYgfBZnGcE" target="_blank"><img className='sticker sis' src='stickers/sis.png' alt="social innovation summit logo sticker"/></Link>
                    <Link to="https://www.youtube.com/watch?si=9uamBRSfOnogzM4n&v=yTPr2RdTxM0&feature=youtu.be" target="_blank"><img className='sticker tedx' src='stickers/tedx.png' alt="tedx talk logo sticker"/></Link>
                    <Link to="/thoughts"><img className='sticker mysteryspot' src='stickers/mysteryspot.png' alt="mysteryspot logo sticker"/></Link>
                   <Link to="/art"><img className='sticker artpallete' src='stickers/artpallete.png' alt="art logo sticker"/></Link>
                   <Link to="https://searchmentalhealth.com/" target="_blank"><img className='sticker smh' src='stickers/smh.png' alt="searchmentalhealth logo sticker"/></Link>
                   
                   <div className="laptop-text">
                        click the stickers
                    </div>
                    <div className="laptop-text laptop-text-elf">
                        yes I like Elf
                    </div>
                    <div className="home-text-container">
                    <div className="home-text">
                        <h1 className="home-text-title">mira<br/>pry</h1>
                        <div className="home-text-categories">
                            <div className="home-text-categories-list">
                                <Link to="/engineering" className="home-text-category-item">engineering</Link>
                                <Link to="/research" className="home-text-category-item">research</Link>
                                <Link to="/advocacy" className="home-text-category-item">advocacy</Link>
                                <Link to="/thoughts" className="home-text-category-item">thoughts</Link>
                                <Link to="/art" className="home-text-category-item">art</Link>
                                <Link to="/ballgame" className="home-text-category-item">ball game</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
      < ContactInfo />
    
   

    </div>
  );
}

export default ArtsyHome;

