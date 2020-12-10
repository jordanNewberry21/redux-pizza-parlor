//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


//class
class PizzaList extends Component{

    goToCheckout = () => {
        console.log(this.props.history)
        this.props.history.push('/customer-form');
    }

    render(){
        return(
            <div>
                       {this.props.pizzaList.map((item) => {
                       return (
                           <PizzaListItem key={item.id} pizza={item} />
                       );
                   })} 
                   <button onClick={this.goToCheckout}>Checkout</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default withRouter(connect()(PizzaList)); 