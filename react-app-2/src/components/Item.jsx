import React, { Component } from 'react';
class Item extends Component {

    updateValue = () => {
        if (this.props.val === 0) return "Zero";
        else return this.props.val;
    }

    render() { 
        return ( 
            <div className="item" id={this.props._id}>
                <span className="quantitie yellow">{this.updateValue()}</span>
                <button onClick={this.props.OnIncrement} className="controls gray">+</button>
                <button onClick={this.props.OnDecrement} className="controls lithGray minus">-</button>
                <button onClick={this.props.OnDelete} className="controls red">X</button>
            </div>    
        );
    }
}
 
export default Item;