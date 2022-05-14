import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Component Imports
import Form from './components/Form.js';
import IdeasContainer from './components/IdeasContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prompts: [
        1, 2, 3
      ],
      responses: [
        'hfe;fdaaf', 'fhidaofdh', 'fdsafdas'
      ]
    }
  };

  render() {
    return (
      <div className="App">
        <h1>let ai help you plan your next adventure</h1>
        <div className="sub-components">
          <Form />
          <IdeasContainer responses={this.state.responses}/>
        </div>
      </div>
    );
  }
}

export default App;
