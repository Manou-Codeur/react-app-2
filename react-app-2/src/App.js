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
    //init some data and selector
    let _id = e.target.parentNode.id;
    let elsArrCopy = [...this.state.elsArr];
    let index = elsArrCopy.findIndex(el => el.id === parseInt(_id));
    //update the card value
    if (this.state.elsArr[index].val === 0) {
      this.setState({numberOfEls: this.state.numberOfEls + 1});
    }
    //add val property
    elsArrCopy[index].val += 1;
    this.setState({elsArr: elsArrCopy});
    //update the style of the decrement btn
    if (this.state.elsArr[index].val > 0) e.target.nextElementSibling.className = "controls gray minus";
  }

  handleDelete = e => {
    
  }

  handleDecrement = e => {
    //init some data and selector
    let _id = e.target.parentNode.id;
    let elsArrCopy = [...this.state.elsArr];
    let index = elsArrCopy.findIndex(el => el.id === parseInt(_id));
    //decrement the val property
    if (this.state.elsArr[index].val > 0) {
      elsArrCopy[index].val -= 1;
      this.setState({elsArr: elsArrCopy});
      //update the card value 
      if (this.state.elsArr[index].val === 0) {
        this.setState({numberOfEls: this.state.numberOfEls - 1});
        e.target.className = "controls lithGray minus";
      }
    }

  }

  handleReset = () => {
    //init
    let elsArrCopy = [...this.state.elsArr];
    //reset the val property
    for (let els of elsArrCopy) {
      els.val = 0;
    }
    this.setState({elsArr: elsArrCopy, numberOfEls: 0});
    //update the style
    let all = document.querySelectorAll(".minus");
    for (let els of all) {
      els.className = "controls lithGray minus"
    }
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
