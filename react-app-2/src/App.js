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
    
  }

  handleDelete = e => {
    
  }

  handleDecrement = e => {
   
  }

  handleReset = () => {
   
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
