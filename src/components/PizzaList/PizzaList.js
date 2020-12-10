//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

//class
class PizzaList extends Component{
    render(){
        return(
            <div>
                       {this.props.pizzaList.map((item) => {
                       return (
                           <PizzaListItem key={item.id} pizza={item} />
                       );
                   })} 
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default PizzaList; 