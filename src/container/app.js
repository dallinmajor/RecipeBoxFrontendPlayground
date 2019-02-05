import React, { Component } from 'react';
import Nav from './nav';
import Aside from './aside';
import Main from './main';
import Footer from '../components/footer';

class App extends Component {
  render() {
    return (
      <div class='grid app'>
        <Nav/>
        <Aside/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
