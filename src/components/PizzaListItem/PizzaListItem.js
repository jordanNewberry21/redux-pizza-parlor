//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import {connect} from 'react-redux';

//class
class PizzaListItem extends Component{
    render(){
        return(
            <div className="pizza">
                <img src={this.props.pizza.image_path} alt="pizza pictures"></img>
                <h2>{this.props.pizza.name}</h2>
                <h4>{this.props.pizza.description}</h4>
                <p>{this.props.pizza.price}</p>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(PizzaListItem); 