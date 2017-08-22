import React, { Component } from 'react';

import '../styles/Projects.css';

// order links later
export default class Projects extends Component {
  render() {
    return (
      <div className="proj-container" id="work">
        <div id="proj1" className="projects">
          <h1 className="title">Title Of Project</h1>
          <div className="vis-and-blurb">
            <div className="proj-visual">visual. consider divs to mock devices with proj image within.</div>
            <div className="proj-blurb">description</div>
          </div>
          <div className="build-set">tool kit</div>
          <div>links</div>
        </div>
        <div id="proj2" className="projects">
          <h1 className="title">Title Of Project</h1>
          <div className="vis-and-blurb">
            <div className="proj-visual">visual. consider divs to mock devices with proj image within.</div>
            <div className="proj-blurb">description</div>
          </div>
          <div className="build-set">tool kit</div>
          <div>links</div>
        </div>
        <div id="proj3" className="projects">
          <h1 className="title">Title Of Project</h1>
          <div className="vis-and-blurb">
            <div className="proj-visual">visual. consider divs to mock devices with proj image within.</div>
            <div className="proj-blurb">description</div>
          </div>
          <div className="build-set">tool kit</div>
          <div>links</div>
        </div>
      </div>
    )
  }
}
