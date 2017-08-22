import React, { Component } from 'react';

import '../styles/MainBody.css';

// import components
import NavBar from './NavBar.js'
import Intro from './Intro.js'
import Project1 from './Project1.js'
import Project2 from './Project2.js'
import Project3 from './Project3.js'


export default class MainBody extends Component {
  render() {
    return (
        <div className="main-body">
          <NavBar />
          <Intro />
          <div className="projects-container">
            <Project1 />
            <Project2 />
            <Project3 />
          </div>
        </div>
    )
  }
}
