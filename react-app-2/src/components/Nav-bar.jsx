import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return ( 
            <div className="nav-bar">
                <h1>Card <span className="stock">{this.props.quantity}</span></h1>
            </div>  
        );
    }
}
 
export default NavBar;