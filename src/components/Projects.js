import React, { Component } from 'react';

// styles
import '../styles/Projects.css';

let projectList = [
  {
    id: 1,
    title: "GABBLE",
    description: "cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.",
    buildSet: "tool | tool | tool | tool | tool",
    link: "github.com"
  },
  {
    id: 2,
    title: "SONG SHARE",
    description: "cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.",
    buildSet: "tool | tool | tool | tool | tool",
    link: "github.com"
  },
  {
    id: 3,
    title: "TUNE YARD",
    description: "cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.",
    buildSet: "tool | tool | tool | tool | tool",
    link: "github.com"
  },

];

export default class Projects extends Component {
  render() {
    let projectGroup = projectList.map((project) => {
      return (
        <div key={project.id} className="project-card">
          <h1 className="title">{project.title}</h1>
          <div className="proj-visual"></div>
          <div className="proj-blurb">
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>
          <div className="build-set">
            <h3>Build Set</h3>
            <p>{project.buildSet}</p>
          </div>
          <div>{project.link}</div>
        </div>
      )
    })

    return (
      <div className="Projects">
        {projectGroup}
      </div>
    );
  }
}
