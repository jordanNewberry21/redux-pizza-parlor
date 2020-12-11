//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import PizzaTable from '../PizzaTable/PizzaTable'

//class
class AdminOrders extends Component {

    componentDidMount() {
        console.log('admin order mounted');
        this.props.getOrders()
    }

    render() {
        return (
            <div>
                <PizzaTable
                    orderHistory={this.props.orderHistory}
                    deleteItem={this.deletePizza} />
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default AdminOrders; 