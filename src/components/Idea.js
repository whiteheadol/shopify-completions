import React from 'react';
import './Idea.css'

const Idea = ({ prompt, response }) => {
  return (
    <div className="idea">
      <p>prompt: {prompt}</p>
      <p>response: {response}</p>
    </div>
  )
};

export default Idea;
