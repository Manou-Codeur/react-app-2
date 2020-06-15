import React, { Component } from 'react';
import NavBar from "./components/Nav-bar";
import Main from "./components/Main";
import './App.css';

class App extends Component {

  state = {
    elsArr: [
        {id: 1, val: 0},
        {id: 2, val: 0},
        {id: 3, val: 0},
        {id: 4, val: 0}
    ],
    numberOfEls: 0
  }

  handleIncrement = e => {
    let _id = e.target.parentNode.id;
    if (this.state.elsArr[_id - 1].val === 0) {
      e.target.nextElementSibling.className = "controls gray";
      this.setState({numberOfEls: this.state.numberOfEls + 1})
    }
    let elsArrCopy = [...this.state.elsArr];
    let index = _id - 1;
    elsArrCopy[index].val += 1;
    this.setState({elsArr: elsArrCopy});
  }

  handleDelete = e => {
    let _id = e.target.parentNode.id;
    let elsArrCopy = [...this.state.elsArr];
    let index = elsArrCopy.findIndex(el => el.id === parseInt(_id));
    elsArrCopy.splice(index, 1)
    this.setState({elsArr: elsArrCopy, numberOfEls: this.state.numberOfEls - 1});
  }

  handleDecrement = e => {
    let _id = e.target.parentNode.id;
    if (this.state.elsArr[_id - 1].val === 1) {
      e.target.className = "controls lithGray";
      this.setState({numberOfEls: this.state.numberOfEls - 1})
    }
    let index = _id - 1;
    if (this.state.elsArr[index].val > 0) {
      let elsArrCopy = [...this.state.elsArr];
      elsArrCopy[index].val -= 1;
      this.setState({elsArr: elsArrCopy});
    }
  }

  handleReset = () => {
    let resetedData = [...this.state.elsArr];
    for (let els of resetedData) {
      els.val = 0;
    }
    this.setState({elsArr: resetedData, numberOfEls: 0})
  }

  render() { 
    return ( 
      <React.Fragment>
        <NavBar quantity={this.state.numberOfEls}/>
        <Main
         els={this.state.elsArr} 
         deleteItem={this.handleDelete}
         increment={this.handleIncrement}
         decrement={this.handleDecrement}
         resetVal={this.handleReset}
         />
      </React.Fragment>
     );
  }
}
 
export default App;
