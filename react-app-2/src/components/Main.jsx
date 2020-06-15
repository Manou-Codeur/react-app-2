import React, { Component } from 'react';
import Item from './Item';
class Main extends Component {

    state = {
        elsArr: [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4}
        ]
    }

    deleteItem = (e) => {
       let id = e.target.parentNode.key;
       let elsArrCopy = [...this.state.elsArr];
       let index = elsArrCopy.indexOf(el => el.id === id);
       elsArrCopy.splice(index, 1);
       this.setState({elsArr: elsArrCopy});
    }

    render() { 
        return ( 
            <div className="main">
                <button className="reset">Reset</button>

                {this.state.elsArr.map(els => <Item OnDelete={this.deleteItem} key={els.id} />)}             

            </div>
        );
    }
}
 
export default Main;