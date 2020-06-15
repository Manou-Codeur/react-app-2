import React, { Component } from 'react';
import Item from './Item';
class Main extends Component {
    render() { 
        return ( 
            <div className="main">
                <button className="reset" onClick={this.props.resetVal}>Reset</button>

                {this.props.els.map(el => 
                    <Item 
                    OnDelete={this.props.deleteItem} 
                    OnIncrement={this.props.increment}
                    OnDecrement={this.props.decrement}
                    key={el.id}
                    _id={el.id}
                    val={el.val} />)
                }             

            </div>
        );
    }
}
 
export default Main;