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
    // this.props.addIdea(newPrompt)
    // invoke method to post, returning new resposne?
    this.postPrompt();
    this.clearInput();
  }

  postPrompt = () => {
    const data = {
      prompt: this.state.prompt,
      temperature: 0.6,
      max_tokens: 50,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
    },
      body: JSON.stringify(data),
    })
    .then(resonse => console.log(response))
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
