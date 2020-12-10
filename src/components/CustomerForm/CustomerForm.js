//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';

//class
class CustomerForm extends Component{ 

    handleChange = () => { 
        console.log('in handle change')
    }

    render(){
        return(
            <div>
                    <input placeholder="customer_name" onChange={(event) => this.handleChange(event, 'name')}/> 
                    <br/>
                    <br/>
                    <input placeholder="street_address" onChange={(event) => this.handleChange(event, 'name')}/> 
                    <br/>
                    <br/>
                    <input placeholder="city" onChange={(event) => this.handleChange(event, 'name')}/> 
                    <br/>
                    <br/>
                    <input placeholder="zip" onChange={(event) => this.handleChange(event, 'name')}/> 
                    <br/>
                    <br/>
                    <p>total</p>
                    <button>Checkout</button>
                    
            </div>
        ) 
    } 
} 

//export
export default CustomerForm; 