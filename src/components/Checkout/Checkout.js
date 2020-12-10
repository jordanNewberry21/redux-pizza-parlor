//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

//class
class Checkout extends Component{
    checkout = () => {
        axios.post('/api/order').then((response) => {
            console.log('back from POST......', response.data);
        }).catch((error) => {
            console.log('error with POST.......', error)
            alert('Something wrong with the POST')
        })
        console.log('In function checkout');
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <section>
                <h2>Step 3: Checkout </h2>
                <p>Customer Name</p>
                <p>Customer Street Address</p>
                <p>Customer city, Customer State</p>
                </section>
                <section>
                    <h4>Delivery or Pickup status</h4>
                </section>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Pizza Name</th>
                                <th>Pizza Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* add pizzaReducer map here */}
                        </tbody>
                    </table>
                </section>
                <section>TOTAL COST</section>
                <button onClick={this.checkout}>CHECKOUT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default withRouter(connect()(Checkout)); 