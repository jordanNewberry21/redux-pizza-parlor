//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';

//class
class Header extends Component {



    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Prime Pizza</h1>
                </header>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default Header; 