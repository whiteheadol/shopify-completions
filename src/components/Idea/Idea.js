import React from 'react';
import './Idea.css'

const Idea = ({ prompt, response }) => {
  return (
    <div className="idea">
      <p><strong>prompt: </strong>{prompt}</p>
      <p><strong>response: </strong>{response}</p>
    </div>
  )
};

export default Idea;
