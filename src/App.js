import React, { Component } from 'react';
import logo from './ll-logo.png';
import './App.css';

class App extends Component {
  clickHome() {
    alert('Clicked Home');
    //<a href='/Hello.js'> Click me? </a>
    //ReactDOM.render(<Home />, document.getElementById('root'))
    //window.location = './Home.js';
  }
  clickWashClub() {
    alert('Clicked Wash Club');
  }

  header() {
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" align="right" />
        <button onClick={this.clickHome}>
          Home
        </button>
        <button onClick={this.clickWashClub}>
          Discount Car Wash Club
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.header()}
        <p className="App-intro">
          Our Services.
        </p>
      </div>
    );
  }
}

export default App;
