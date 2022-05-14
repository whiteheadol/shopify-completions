import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      prompt: '',
      response: '',
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitIdea = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInput();
  }

  clearInput = () => {
    this.setState({ prompt: '', response: '' })
  }

  render() {
    return (
      <form className="form-container">
      <h2>describe your dream trip in a few words</h2>
        <input
          type='text'
          placeholder='ex: hot, hiking, inexpensive'
          name='prompt'
          className="form-input"
          value={this.state.prompt}
          onChange={event => this.handleChange(event)}
        />
        <button className="submit-button" onClick={event => this.submitIdea(event)}>let's go</button>
      </form>
    )
  }
};

export default Form;
