import React, { Component } from 'react';

import '../styles/App.css';

// import components
import NavBar from './NavBar.js'
import Intro from './Intro.js'
import Projects from './Projects.js'
// import MainBody from './MainBody.js'

export default class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <Intro />
        <div className="work container-fluid">
          <Projects />
        </div>

      </div>
    )
  }
}
