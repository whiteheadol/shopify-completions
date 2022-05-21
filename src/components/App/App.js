import React, { Component } from 'react';
import Form from '../Form/Form.js';
import IdeasContainer from '../IdeasContainer/IdeasContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  };

  addCard = (card) => {
    this.setState({ ideas: [card, ...this.state.ideas]})
  }

  render() {
    return (
      <main className="App">
        <h1>let ai help you plan your next adventure</h1>
        <section className="sub-components">
          <div className="form-styling">
            <Form addCard={this.addCard}/>
          </div>
          <IdeasContainer ideas={this.state.ideas} />
        </section>
      </main>
    );
  }
}

export default App;
