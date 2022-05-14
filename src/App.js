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
        {id: 1, prompt: '1', response: 'fesaf'},
        {id: 2, prompt: '2', response: 'fesafdsa'},
        {id: 3, prompt: '3', response: 'fsrt'},
        {id: 4, prompt: '4', response: 'hguhpiojion'},
        {id: 5, prompt: '5', response: 'bvhjo'},
      ]
    }
  };

  addIdea = (newIdea) => {
    this.setState({ ideas: [newIdea, ...this.state.ideas]})
  }

  render() {
    return (
      <div className="App">
        <h1>let ai help you plan your next adventure</h1>
        <div className="sub-components">
          <div className="form-styling">
            <Form addIdea={this.addIdea}/>
          </div>
          <IdeasContainer ideas={this.state.ideas} />
        </div>
      </div>
    );
  }
}

export default App;
