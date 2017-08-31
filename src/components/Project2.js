import React, { Component } from 'react';

// bootstrap
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

// styles
import '../styles/Projects.css';


export default class Project2 extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="project-containers">
        <Button onClick={ ()=> this.setState({ open: !this.state.open })} block className="proj-buttons">
          TUNE YARD
        </Button>
        <Panel collapsible expanded={this.state.open} id="proj2" className="project-panels">
          <div className="panel-content">
            <h1 className="title">Title Of Project</h1>
            <div className="proj-visual"></div>
            <div className="proj-blurb">
              <h3>Description</h3>
              <p><b>Placeholder text for project description..</b>cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </div>
            <div className="build-set">
              <h3>Build Set</h3>
              <p>tool | tool | tool | tool | tool</p>
            </div>
            <div>links</div>
          </div>
        </Panel>
      </div>
    );
  }
}
