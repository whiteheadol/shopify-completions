import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Component Imports
import Form from './components/Form.js';
import IdeasContainer from './components/IdeasContainer.js';

function App() {
  return (
    <div className="App">
      <h1>let ai help you plan your next adventure</h1>
      <div className="sub-components">
        <Form />
        <IdeasContainer />
      </div>
    </div>
  );
}

export default App;
