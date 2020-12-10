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
        const customer = this.props.reduxState.clientReducer;
        return(
            <div>
                <section>
                <h2>Step 3: Checkout </h2>
                <p>{customer.customer_name}</p>
                <p>{customer.street_address}</p>
                <p>{customer.city}, {customer.zip}</p>
                </section>
                <section>
                    <h4>{customer.type}</h4>
                </section>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* add pizzaReducer map here */}
                        </tbody>
                    </table>
                </section>
                <section>{customer.total}</section>
                <button onClick={this.checkout}>CHECKOUT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
//export
export default withRouter(connect(putReduxStateOnProps)(Checkout)); 