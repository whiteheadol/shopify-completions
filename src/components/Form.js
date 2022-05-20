import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      prompt: '',
      error: false,
      input: true
    }
  }

  handleChange = event => {
    this.setState({prompt: event.target.value})
  }

  createNewCard = (response) => {
    const newCard = {
      id: Date.now(),
      prompt: this.state.prompt,
      response: response,
    }
    this.props.addCard(newCard);
    this.clearInput();
  }

  submitIdea = (event) => {
    event.preventDefault();
    if (this.state.prompt) {
      this.postPrompt(this.state.prompt);
      this.setState({input: true})
    } else {
      this.setState({input: false})
    }
  }

  postPrompt = (input) => {
    const data = {
      prompt: `hot, hiking, inexpensive: You should visit Ecuador!
      museums, shopping, fashion: You should visit Milan, Italy!
      ocean, relaxing, hot: You should visit Cancun, Mexico!
      ${input}:`,
      temperature: 0.6,
      max_tokens: 50,
      top_p: 1.0,
      frequency_penalty: 0.4,
      presence_penalty: 0.4
    }

    let key = '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';
    // let key2;

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        this.setState({ error: false });
        return response.json()
      } else {
        throw Error(response.statusText)
      }
    })
    .then(data => data.choices[0].text)
    .then((text) => this.createNewCard(text))
    .catch(err => {
      this.setState({ error: true })
    })
  };

  clearInput = () => {
    this.setState({ prompt: '',  })
  };

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
          required
        />
        <button className="submit-button" onClick={event => this.submitIdea(event)}>let's go</button>
        {this.state.error && <h3 className="error-message">oh no, something went wrong! please try again soon</h3>}
        {!this.state.input && <h3 className="input-error-message">please provide a valid input</h3>}
      </form>
    )
  }
};

export default Form;
