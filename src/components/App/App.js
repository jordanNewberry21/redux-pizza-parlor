import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Menu from '../Menu/Menu';
import CustomerForm from '../CustomerForm/CustomerForm';
import AdminOrders from '../AdminOrders/AdminOrders';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Checkout from '../Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p> 
        <Router> 
          <Route exact path="/" component={Menu}/>
          <Route exact path="/customer-form" component={CustomerForm}/>
          <Route path="/admin" component={AdminOrders}/>
          <Route path="/checkout" component={Checkout}/>
        </Router>
      </div>
    );
  }
}//end render

export default connect()(App);
