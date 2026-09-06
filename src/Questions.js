import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Questions() {
  return (
    <div className="App">
      <div className="list-page-container">
      <div className="list-page-header">t<i>(h)</i>ink<s>er</s>ing: i ask questions but i don't have the answers (yet).
      </div>


        <ul className="clean-list">
        <li className="list-item-compact">How might we be able to expand the human umwelt?</li>
          <li className="list-item-compact">Is culture across the country and world homogenizing now with the younger generation?</li>
          <li className="list-item-compact">What is the data of our brains? Versus AI data, qualia?</li>
          <li className="list-item-compact">How can we give real-time data on someone's bipolar disorder</li>
          <li className="list-item-compact">How does philosophy physically change our brains? Mental health?</li>
          <li className="list-item-compact">Why do teens get into existential philosophy? Is it a safety anthropological mechanism? Is this early forms of depression? Does depression have a deeper philosophical root?</li>
          <li className="list-item-compact">How does nature help cure bipolar disorder?</li>
          <li className="list-item-compact">Why do we cry? Why not something else?</li>
          <li className="list-item-compact">Is there such thing as pure altruism? Selflessness? How do we measure that?</li>
          <li className="list-item-compact">When we slip into moods so quickly, how do we get people to feel the same thing as others? To empathize? Can we create empathy with technology?</li>
          <li className="list-item-compact">How can we monitor moods?</li>
          <li className="list-item-compact">Can we pass memories from one person to another in an objective and accurate way? So as to help human society remember the pain, the struggle, and to empathize, to not create more problems because we forget</li>
          <li className="list-item-compact">Why do we want to know why?</li>
          <li className="list-item-compact">Why do humans kill themselves?</li>
          <li className="list-item-compact">Why do we die?</li>
          <li className="list-item-compact">Why do we dream?</li>
          <li className="list-item-compact">How do we understand how people make really big decisions or possess certain personalities in life? And how do we make this understanding/information accessible so people can better their lives?</li>
          <li className="list-item-compact">How might our experiences/stories create biases and naturally make us more conservative?</li>
          <li className="list-item-compact">How do we move past stigma?</li>
          <li className="list-item-compact">Why are we so bad at knowing what makes us happy?</li>
          <li className="list-item-compact">How do we make people more introspective? How do we help people understand and empathize with themselves?</li>
          <li className="list-item-compact">How do we induce more empathy? Can we use technology to do this?</li>
        </ul>
        <div className="last-updated">last updated 4/28/22</div>
        <Link to="/thoughts" className="subpage-back">&#8592;</Link>
        </div>
      </div>
  );
}

export default Questions;

