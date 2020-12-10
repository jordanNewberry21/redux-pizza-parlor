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
                <header>
                    <h2>Hello from _template component </h2>
                </header>
                    <input placeholder="name" onChange={(event) => this.handleChange(event, 'name')}/> 
                    <input placeholder="street adress" onChange={(event) => this.handleChange(event, 'name')}/> 
                    <input placeholder="street adress" onChange={(event) => this.handleChange(event, 'name')}/> 
                    <input placeholder="street adress" onChange={(event) => this.handleChange(event, 'name')}/> 
            </div>
        ) 
    } 
} 

//export
export default CustomerForm; 