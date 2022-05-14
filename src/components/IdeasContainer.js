import React, {Fragment} from 'react';
import Idea from './Idea';

const IdeasContainer = ({ responses }) => {
  const ideaComponents = responses.map(el => {
    return (
      <Idea
        response={el}
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
