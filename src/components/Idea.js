import React from 'react';
import './Idea.css'

const Idea = ({ prompt, response }) => {
  return (
    <div>
      <p>prompt: {prompt}</p>
      <p>response: {response}</p>
    </div>
  )
};

export default Idea;
