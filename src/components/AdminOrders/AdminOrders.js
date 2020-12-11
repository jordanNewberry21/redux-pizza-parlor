//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';

//class
class AdminOrders extends Component{

    componentDidMount(){
        console.log('admin order mounted');
        this.props.getOrders()
    }

    render(){
        return(
            <div>
                <h2>Hello from AdminOrders component </h2>
                {this.props.orderHistory.map( order => 
                    <p key={order.id} >hey there</p>
                    )}
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default AdminOrders; 