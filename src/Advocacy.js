

import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Engineering() {
  return (
    <div className="App">
        <div className="center-container">
                <div className="subpage-container">

                      <div className="subpage-header">advocacy</div>


                        <div className="subpage-text">
                        My advocacy journey started with a camera. During the pandemic, I 
                        launched <Link className="subpage-text-link" to="https://www.communityphotobooth.com/" target="_blank">The Community Photobooth</Link>, a 
                        collective of young photographers who leverage photography for philanthropy. In 2022, 
                        I led our team to <Link to="https://www.communityphotobooth.com/2022-photoshoot-fundraiser" className="subpage-text-link" target="_blank">raise over $10,000</Link> for 
                        the National Alliance on Mental Illness's (NAMI) Ending the Silence program and 
                        produced a  <Link to="https://www.youtube.com/watch?v=EpYAJdZWzZ4" className="subpage-text-link" target="_blank">short documentary on the youth mental health crisis</Link> which was 
                        featured on <Link to="https://www.thedrewbarrymoreshow.com/videos/drew-loves-how-bay-area-students-are-bringing-mental-health-education-to-schools-drews-news" className="subpage-text-link" target="_blank">The Drew Barrymore Show</Link>, <Link to="https://www.cbsnews.com/sanfrancisco/news/stanford-soccer-stars-tragic-death-intensifies-attention-on-mental-health/" className="subpage-text-link" target="_blank">CBS News</Link>, and <Link to="https://www.facebook.com/abc7news/videos/797296827983660/?scrlybrkr=02624329" className="subpage-text-link" target="_blank">ABC News</Link>. 
                        From there, I organized my <Link to="https://www.smdailyjournal.com/news/local/open-mic-for-mental-health-in-san-mateo/article_760f7d12-8283-11ed-bc31-9f21b4af9384.html" className="subpage-text-link" target="_blank">my county's first mental health open mic</Link>, 
                        joined my county's <Link to="https://smcbhrsblog.org/2024/05/02/celebrating-community-at-the-2024-tony-hoffman-awards/" className="subpage-text-link" target="_blank">Behavioral Health Commission Youth Action Board</Link> (serving 
                        three years, two as co-chair), and was appointed <Link to="https://www.unicefusa.org/about-unicef-usa/leadership/youth-representatives/charlotte" className="subpage-text-link" target="_blank">1 of 10 US Youth Representatives for UNICEF</Link>. In 2024, the US Government named me <Link to="https://www.einnews.com/pr_news/746209648/samhsa-announces-inaugural-trailblazers-in-advancing-recovery-star-award-winners" className="subpage-text-link" target="_blank">SAMHSA's Young Adult Leader of the Year</Link>, and I’ve 
                        spoken on youth mental health at <Link className="subpage-text-link" to="https://www.youtube.com/watch?v=Z4fx6zwIFx8" target="_blank">NAMI California</Link>, <Link className="subpage-text-link" to="https://www.youtube.com/watch?si=9uamBRSfOnogzM4n&v=yTPr2RdTxM0&feature=youtu.be" target="_blank">TEDx</Link>, and the <Link className="subpage-text-link" to="https://www.youtube.com/watch?v=MMYgfBZnGcE" target="_blank">Social Innovation Summit</Link>.


                        </div>
                        <Link to="/" className="subpage-back">&#8592;</Link>
                      </div>
                            
                   
            
        </div>
    
      {/* <ContactInfo /> */}

   

    </div>
  );
}

export default Engineering;

