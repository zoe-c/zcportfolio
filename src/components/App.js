import React, { Component } from 'react';

import '../styles/App.css';

// import components
import NavBar from './NavBar.js'
import MainBody from './MainBody.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainBody />

      </div>
    )
  }
}
