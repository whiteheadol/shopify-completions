import React from 'react';
import './Idea.css'

const Idea = ({ prompt, response }) => {
  return (
    <article className="idea">
      <p><strong>prompt: </strong>{prompt}</p>
      <p><strong>response: </strong>{response}</p>
    </article>
  )
};

export default Idea;
