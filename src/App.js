import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Components/calendar/Calendar';

class App extends Component {
    constructor(props) {
        super(props);

    }
  render() {
      return (
          <div>
              <div className="App">
                  <div className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h2>Welcome to React</h2>
                  </div>
              </div>
              <Calendar />
          </div>
      );
  }
}

export default App;
