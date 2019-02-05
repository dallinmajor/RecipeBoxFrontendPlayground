import React, { Component } from 'react';
import './App.css';
import Nav from './container/nav';
import Aside from './container/aside';
import Main from './container/main';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Aside/>
        <Main/>
      </div>
    );
  }
}

export default App;
