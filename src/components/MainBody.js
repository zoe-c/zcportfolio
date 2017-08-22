import React, { Component } from 'react';

import '../styles/MainBody.css';

// import components
import NavBar from './NavBar.js'
import Intro from './Intro.js'
import Projects from './Projects.js'

export default class MainBody extends Component {
  render() {
    return (
        <div className="main-body">
          <NavBar />
          <Intro />
          <div className="projects-container">
            <Projects />
          </div>
        </div>
    )
  }
}
