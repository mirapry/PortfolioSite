import React from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home.js";
import Engineering from "./Engineering.js";
import Research from "./Research.js";
import Advocacy from "./Advocacy.js";
import Thoughts from "./Thoughts.js";
import Art from "./Art.js";
import Photos from "./Photos.js";
import Drawings from "./Drawings.js";
import MixedMedia from "./MixedMedia.js";
import Articles from "./Articles.js";
import Questions from "./Questions.js";
import Books from "./Books.js";
import Travel from "./Travel.js"; 
import Resume from "./Resume.js"; 
import MCHRI from "./MCHRI.js"; 
import Press from "./Press.js";
import BookPhotoshoot from "./BookPhotoshoot.js";
import ProtectedRegeneronPaper from "./ProtectedRegeneronPaper.js";
import ChatGpt26 from './chatgpt26/ChatGpt26.js';
import BallGame from './BallGame.js';

export const RoutesList = () => {
 
  return (
    <div>
      
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/engineering' element={<Engineering />} />
          <Route path='/research' element={<Research />} />
          <Route path='/advocacy' element={<Advocacy />} />
          <Route path='/thoughts' element={<Thoughts />} />
          <Route path='/art' element={<Art />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/drawings' element={<Drawings />} /> 
          <Route path='/mixedmedia' element={<MixedMedia />} /> 
          <Route path='/articles' element={<Articles />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/books' element={<Books />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/mchri' element={<MCHRI />} />
          <Route path='/press' element={<Press />} />
          <Route path='/book-photoshoot' element={<BookPhotoshoot />} />
          <Route path='/cibsr-paper' element={<ProtectedRegeneronPaper />} />
          <Route path='/hopes-for-technology' element={<ChatGpt26 />} />
          <Route path='/chatgpt-26' element={<ChatGpt26 />} />
          <Route path='/ballgame' element={<BallGame />} />
          <Route path='/what-we-miss' element={<Navigate to='/hopes-for-technology' replace />} />
          <Route path='*' element={<p style={{ textAlign: 'center' }}>Hmmm...sneaking around, I see. There's nothing here! <br />- xoxo, mira </p>} />
        </Routes>
    </div>
  );
};