import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='ex: hot, hiking, inexpensive'
          name='user-input'
        />
        <button>let's go</button>
      </form>
    )
  }
};

export default Form;
