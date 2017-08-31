import React, { Component } from 'react';

import '../styles/MainBody.css';

// import components
import Intro from './Intro.js'
import Projects from './Projects.js'



export default class MainBody extends Component {
  render() {
    return (
        <div className="main-body">
          <Intro />
          <div className="work">
            <Projects />
          </div>
        </div>
    )
  }
}
