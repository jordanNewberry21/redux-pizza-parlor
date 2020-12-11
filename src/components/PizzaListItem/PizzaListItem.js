//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import {connect} from 'react-redux';

//class
class PizzaListItem extends Component{

    state = {
        buttonClick: true
    }

    addPizza = () => {
        console.log('in addPizza function cause i clicked the button.....')
        this.setState({
            buttonClick: !this.state.buttonClick
        })
        this.props.dispatch( { type: 'CHECKOUT_PIZZA', payload: this.props.pizza})
        console.log('Added pizza to cart', this.props.pizza);
        
    }

    removePizza = () => {
        console.log('hello from remove pizza')
        this.setState({
            buttonClick: !this.state.buttonClick
        })
        this.props.dispatch( { type: 'DELETE_PIZZA', payload: this.props.pizza.id})
    }

    render(){
        return(
            <div className="pizza">
                {/* <img src={this.props.pizza.image_path} alt="pizza pictures"></img> */}
                <h2>{this.props.pizza.name}</h2>
                <h4>{this.props.pizza.description}</h4>
                <p>{this.props.pizza.price}</p>
                {this.state.buttonClick ?
                    <button onClick={this.addPizza}>Add Pizza</button>  : 
                    <button onClick={this.removePizza}>Remove Pizza</button>}
                
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(PizzaListItem); 