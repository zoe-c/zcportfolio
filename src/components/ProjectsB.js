import React, { Component } from 'react';

// components
import Project4 from './Project4.js';
import Project5 from './Project5.js';

// styles
import '../styles/Projects.css';

export default class ProjectsB extends Component {

  render() {
    return (
      <div className="container-fluid work2">
        <Project4 className="projectB-containers"/>
        <Project5 className="projectB-containers"/>
      </div>
    );
  }
}
