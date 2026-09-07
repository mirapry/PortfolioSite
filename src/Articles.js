import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Articles() {
  return (
    <div className="App">
      <div className="list-page-container">
      <div className="list-page-header">articles I've enjoyed reading and found thought-provoking</div>


        <ul className="clean-list">
          <li className='list-item-compact'><a href="https://www.seangoedecke.com/how-to-keep-thinking/" target="_blank" rel="noopener noreferrer">"How to Keep Thinking" - Sean Goedecke</a></li>
          <li className="list-item-compact"><a href="https://samkriss.substack.com/p/if-you-let-ai-do-your-writing-i-will" target="_blank" rel="noopener noreferrer">"If you let AI do your writing, I will punch you in the face" - Sam Kriss</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2026/05/12/opinion/decision-making-herbert-simon.html" target="_blank" rel="noopener noreferrer">"The Nobel-Winning Psychologist Who Believed He Found the Secret to Happiness | New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2026/06/19/opinion/ezra-klein-podcast-gary-shteyngart.html?smid=nytcore-ios-share" target="_blank" rel="noopener noreferrer">"I Keep Telling People We’re Living in This Dystopian Novel | Ezra Klein Podcast: Gary Shteyngart" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.washingtonpost.com/business/2025/03/21/loneliness-epidemic-young-adults/" target="_blank" rel="noopener noreferrer">"The loneliest people (and places) in America" - Washington Post</a></li>
          <li className="list-item-compact"><a href="https://www.media.mit.edu/posts/openai-mit-research-collaboration-affective-use-and-emotional-wellbeing-in-ChatGPT/" target="_blank" rel="noopener noreferrer">"Early methods for studying affective use and emotional wellbeing in ChatGPT" - OpenAI and MIT Media Lab Research</a></li>
          <li className="list-item-compact"><a href="https://aeon.co/essays/when-a-parent-dies-by-suicide-how-are-the-children-told" target="_blank" rel="noopener noreferrer">"When a parent dies by suicide, how the children are told casts a permanent shadow" - Aeon</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2023/01/28/opinion/asian-american-gun.html" target="_blank" rel="noopener noreferrer">"A Terrifying Sign of Assimilation" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://time.com/6246269/yuval-noah-harari-quest-for-identity/" target="_blank" rel="noopener noreferrer">"The Dangerous Quest for Identity" - Yuval Noah Harari, Time</a></li>
          <li className="list-item-compact"><a href="https://www.vice.com/en/article/pkadgm/man-dies-by-suicide-after-talking-with-ai-chatbot-widow-says" target="_blank" rel="noopener noreferrer">"'He Would Still Be Here': Man Dies by Suicide After Talking with AI Chatbot" - Vice</a></li>
          <li className="list-item-compact"><a href="https://www.newyorker.com/magazine/2023/04/03/the-data-delusion" target="_blank" rel="noopener noreferrer">"The Data Delusion" - New Yorker</a></li>
          <li className="list-item-compact"><a href="https://docs.google.com/document/d/1t3WqIZ4IKnExdr9omqxEX_zvNGki0LpBTPKlF5YeZKI/edit" target="_blank" rel="noopener noreferrer">"How to change the course of human history" - David Graeber</a></li>
          <li className="list-item-compact"><a href="http://mitp-content-server.mit.edu:18180/books/content/sectbyfn?collid=books_pres_0&id=2302&fn=9780262572279_sch_0001.pdf" target="_blank" rel="noopener noreferrer">"René Descartes and the Birth of Neuroscience" - MIT Press</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/interactive/2022/10/11/opinion/mental-health-america.html#mental-health-america-politics" target="_blank" rel="noopener noreferrer">"It's Not Just You - Mental Health in America" - New York Times Series</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2022/09/20/opinion/us-mental-health-politics.html" target="_blank" rel="noopener noreferrer">"Mental Health Is Political" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/interactive/2022/09/20/opinion/therapy-america-covid.html?action=click&module=RelatedLinks&pgtype=Article" target="_blank" rel="noopener noreferrer">"Who is going to therapy in America?" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.newyorker.com/science/annals-of-artificial-intelligence/there-is-no-ai" target="_blank" rel="noopener noreferrer">"There Is No A.I." - Jaron Lanier, New Yorker</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2023/04/30/opinion/loneliness-epidemic-america.html" target="_blank" rel="noopener noreferrer">"Surgeon General: We Have Become a Lonely Nation" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://mindingourway.com/on-caring/" target="_blank" rel="noopener noreferrer">"On Caring" - Effective Altruism</a></li>
          <li className="list-item-compact"><a href="https://bijoor.me/2013/03/14/big-data-asimov-psychohistory/" target="_blank" rel="noopener noreferrer">"Big Data Isaac Asimov 'Psychohistory'" - Bijoor</a></li>
          <li className="list-item-compact"><a href="https://blog.samaltman.com/how-to-be-successful" target="_blank" rel="noopener noreferrer">"How To Be Successful" - Sam Altman</a></li>
          <li className="list-item-compact"><a href="https://hopelab.org/insight/evidence-based-perspective-social-media-young-people/?utm_source=%2AHopelab+Email+List%2A&utm_campaign=425415ed37-EMAIL_CAMPAIGN_2023_12_11_05_13_COPY_01&utm_medium=email&utm_term=0_-a248221348-%5BLIST_EMAIL_ID%5D" target="_blank" rel="noopener noreferrer">"An Evidence-Based Perspective on Social Media Use Among Young People" - Hopelab</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2024/05/01/opinion/smartphones-social-media-mental-health-teens.html?pgtype=Article&action=click&module=RelatedLinks" target="_blank" rel="noopener noreferrer">"Are Smartphones Driving Our Teens to Depression?" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2024/01/12/opinion/children-nicotine-zyn-social-media.html?smid=nytcore-ios-share&referringSource=articleShare&sgrp=c-cb" target="_blank" rel="noopener noreferrer">"Our Kids Are Living in a Different Digital World" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.theverge.com/2024/5/4/24144763/ai-chatbot-friends-character-teens?trk=feed-detail_main-feed-card_feed-article-content" target="_blank" rel="noopener noreferrer">"The teens making friends with AI chatbots" - The Verge</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2024/07/19/technology/ai-data-restrictions.html?smid=nytcore-ios-share&referringSource=articleShare&sgrp=c-cb" target="_blank" rel="noopener noreferrer">"The Data That Powers A.I. Is Disappearing Fast" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2024/07/12/opinion/gender-affirming-care-cass-review.html?smid=nytcore-ios-share&referringSource=articleShare&sgrp=c-cb" target="_blank" rel="noopener noreferrer">"Why Is the U.S. Still Pretending We Know Gender-Affirming Care Works?" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.nytimes.com/2024/07/17/health/moving-childhood-depression.html?smid=nytcore-ios-share&referringSource=articleShare&sgrp=c-cb" target="_blank" rel="noopener noreferrer">"Moving in Childhood Contributes to Depression, Study Finds" - New York Times</a></li>
          <li className="list-item-compact"><a href="https://www.wired.com/2008/04/mind-decision/#:~:text=You%20may%20think%20you%20decided%20to%20read%20this%20story%20%2D%2D,even%20aware%20of%20making%20them" target="_blank" rel="noopener noreferrer">"Brain Scanners Can See Your Decisions Before You Make Them" - Wired</a></li>
          <li className="list-item-compact"><a href="https://www.theatlantic.com/magazine/archive/2017/06/lolas-story/524490/" target="_blank" rel="noopener noreferrer">"My family's slave (Lola)" - The Atlantic</a></li>
          <li className="list-item-compact"><a href="https://www.benleejamin.com/2024/02/13/prior-art.html" target="_blank" rel="noopener noreferrer">"Prior Art" - Benjamin Lee</a></li>
          <li className="list-item-compact"><a href="https://marginalrevolution.com/marginalrevolution/2024/04/the-progress-in-progress-studies.html" target="_blank" rel="noopener noreferrer">"The Progress" - Tyler Cowen</a></li>
          <li className="list-item-compact"><a href="https://snbafana.substack.com/p/simulation-fever-and-applied-progress/comments" target="_blank" rel="noopener noreferrer">"Simulation fever & applied progress studies" - Soham Bafana</a></li>
        </ul>
        <div className="last-updated">last updated 9/1/25</div>
        <Link to="/thoughts" className="subpage-back">&#8592;</Link>
        </div>
      </div>
  );
}

export default Articles;

