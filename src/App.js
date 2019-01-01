import React, { Component } from 'react';
import logo from './assets/raven.png';
import './App.css';
import Default from './components/Default/Default';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <img className="NavLogo" src={logo} alt="" />
        </div>
        <Default />
      </div>
    );
  }
}

export default App;
