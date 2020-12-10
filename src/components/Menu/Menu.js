//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList'

//class
class Menu extends Component{
    componentDidMount(){
        this.getPizzas();
      }//end mount

      getPizzas = () => {
        // tell axios to make a get call
        axios.get( '/api/pizza' ).then( ( response ) => {
          console.log( 'back from GET:', response.data );
          // dispatch array results 
          this.props.dispatch( { type: 'SEND_PIZZA', payload: response.data } );
        }).catch( ( err ) =>{
          console.log( err );
          alert( 'problem with GET' );
        }) //end axios
      } // end get Pizza
    

    render(){
        return(
            <div>
                <PizzaList pizzaList={this.props.reduxState.pizzaReducer}/>
                
            </div>
        ) //end return 
    } //end render
} //end class 

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
//export
export default connect(putReduxStateOnProps)(Menu); 