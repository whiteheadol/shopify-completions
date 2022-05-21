import React from 'react';
import Idea from '../Idea/Idea';
import './IdeasContainer.css';


const IdeasContainer = ({ ideas }) => {
  const ideaComponents = ideas.map(el => {
    return (
      <Idea
        prompt={el.prompt}
        response={el.response}
        key={el.id}
      />
    )
  })

  return (
    <section className="ideas-container">
      <h2 className="ideas-title">your past inspiration:</h2>
      {ideaComponents}
    </section>
  )
};

export default IdeasContainer;
