import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="form-container">
      <h2>describe your dream trip in a few words</h2>
        <input
          type='text'
          placeholder='ex: hot, hiking, inexpensive'
          name='user-input'
          className="form-input"
        />
        <button className="submit-button">let's go</button>
      </form>
    )
  }
};

export default Form;
