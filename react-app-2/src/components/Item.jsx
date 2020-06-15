import React, { Component } from 'react';
class Item extends Component {

    render() { 
        return ( 
            <div className="item" id={this.props._id}>
                <span className="quantitie yellow">{this.props.val}</span>
                <button onClick={this.props.OnIncrement} className="controls gray">+</button>
                <button onClick={this.props.OnDecrement} className="controls lithGray">-</button>
                <button onClick={this.props.OnDelete} className="controls red">X</button>
            </div>    
        );
    }
}
 
export default Item;