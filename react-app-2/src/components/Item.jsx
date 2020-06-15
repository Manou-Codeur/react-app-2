import React, { Component } from 'react';
class Item extends Component {

    state = {
        quantity: 0
    }

    increment = (e) => {
        e.target.nextElementSibling.className = "controls gray";
        this.setState({quantity: this.state.quantity + 1})
    }

    decrement = (e) => {
        if (this.state.quantity === 1) {
            e.target.className = "controls lithGray";
        }
        if (this.state.quantity > 0) {
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    updateQte = () => {
      if (this.state.quantity === 0) return "Zero"
      else return this.state.quantity;
    }

    delete = (e) => {
        const el = e.target.parenNode;
        el.parenNode.removeChild(el);
    }

    render() { 
        return ( 
            <div className="item">
                <span className="quantitie yellow">{this.updateQte()}</span>
                <button onClick={this.increment} className="controls gray">+</button>
                <button onClick={this.decrement} className="controls lithGray">-</button>
                <button onClick={this.props.OnDelete} className="controls red">X</button>
            </div>    
        );
    }
}
 
export default Item;