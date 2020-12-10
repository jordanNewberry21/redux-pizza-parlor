import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Menu from '../Menu/Menu';
import CustomerForm from '../CustomerForm/CustomerForm';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p> 
        <Router> 
          <Route Route exact path="/" component={Menu}/>
          <Route Route exact path="/customer-form" component={CustomerForm}/>
        </Router>
      </div>
    );
  }
}

export default App;
