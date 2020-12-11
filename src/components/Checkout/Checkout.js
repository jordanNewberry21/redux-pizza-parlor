//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

//class
class Checkout extends Component{

    state = {
       
        customer_name: this.props.reduxState.clientReducer.customer_name,
        street_address: this.props.reduxState.clientReducer.street_address,
        city: this.props.reduxState.clientReducer.city,
        zip: this.props.reduxState.clientReducer.zip,
        type: this.props.reduxState.clientReducer.type,
        total: this.props.reduxState.clientReducer.total,
        pizzas: this.props.reduxState.checkoutReducer,
        
    }

    checkout = () => {
        axios.post('/api/order', this.state).then((response) => {
            console.log('back from POST......', response.data);
        }).catch((error) => {
            console.log('error with POST.......', error)
            alert('Something wrong with the POST')
        })
        console.log('In function checkout');
        this.props.history.push('/'); 
        this.props.dispatch( { type: 'END_ORDER' } );
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
                            {
                            this.props.reduxState.checkoutReducer.map((pizza) => 
                                <tr>
                                    <td>{pizza.name}</td>
                                    <td>{pizza.price}</td>
                                
                                </tr>
                            )
                            } 
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