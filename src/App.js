import React, { Component } from 'react';
import logo from './res/img/ll-logo.png';
import PageBody from './PageBody.js';
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
        <PageBody />
      </div>
    );
  }
}

export default App;
