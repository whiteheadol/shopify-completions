import React, {Fragment} from 'react';
import Idea from './Idea';

const IdeasContainer = ({ ideas }) => {
  const ideaComponents = ideas.map(el => {
    return (
      <Idea
        prompt={el.prompt}
        response={el.response}
      />
    )
  })

  return (
    <div>
      {ideaComponents}
    </div>
  )
};

export default IdeasContainer;
