import React, { Component } from 'react';

// bootstrap
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// styles
import '../styles/Projects.css';


export default class Project5 extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })} className="app-icon">
          click
        </Button>
        <Panel collapsible expanded={this.state.open} id="proj5">
        <div className="panel-content">
          <div className="proj-visual"></div>
        </div>
        <div className="panel-content">
          <div className="proj-blurb">description</div>
          <div className="build-set">tool kit</div>
        </div>
        <div className="panel-content">
          <div>links</div>
        </div>
        </Panel>
      </div>
    );
  }
}
