import React, { Component } from 'react';

// components
import Project1 from './Project1.js';
import Project2 from './Project2.js';
import Project3 from './Project3.js';

// styles
import '../styles/Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div id= "work">
        <h1>w o r k</h1>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    );
  }
}
