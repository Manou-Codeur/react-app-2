import React, { Component } from 'react';
import NavBar from "./components/Nav-bar";
import Main from "./components/Main";
import './App.css';

class App extends Component {

  state = {
    Qt: 0
  }


  render() { 
    return ( 
      <React.Fragment>
        <NavBar/>
        <Main qte={this.state.Qt} />
      </React.Fragment>
     );
  }
}
 
export default App;
