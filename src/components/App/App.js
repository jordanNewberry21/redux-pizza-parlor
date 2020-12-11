import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import CustomerForm from '../CustomerForm/CustomerForm';
import AdminOrders from '../AdminOrders/AdminOrders';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Checkout from '../Checkout/Checkout';


class App extends Component {

  state = {
    orderHistory: []
  }

  getOrders = () => {
    axios.get('/api/order')
      .then((response) => {
        this.setState({
          orderHistory: response.data
        })
        console.log('back from server', this.state.orderHistory);
      })
      .catch((err) => {
        console.log(err);
        alert('problem with GET');
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
        <Router>
          <Route exact path="/" component={Menu} />
          <Route exact path="/customer-form" component={CustomerForm} />
          <Route path="/admin">
            <AdminOrders getOrders={this.getOrders} orderHistory={this.state.orderHistory} />
          </Route>
          <Route path="/checkout" component={Checkout} />
        </Router>
      </div>
    );
  }
}//end render

export default connect()(App);
