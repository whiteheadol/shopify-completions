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
      ideas: [
        {prompt: '1', response: 'fesaf'},
        {prompt: '2', response: 'fesafdsa'},
        {prompt: '3', response: 'fsrt'},
        {prompt: '4', response: 'hguhpiojion'},
        {prompt: '5', response: 'bvhjo'},

      ]
    }
  };

  render() {
    return (
      <div className="App">
        <h1>let ai help you plan your next adventure</h1>
        <div className="sub-components">
          <Form />
          <IdeasContainer ideas={this.state.ideas} />
        </div>
      </div>
    );
  }
}

export default App;
