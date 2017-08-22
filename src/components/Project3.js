
import React, { Component } from 'react';

// bootstrap
import { PanelGroup } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

// styles
import '../styles/Projects.css';

export default class Project3 extends Component {
  constructor (props) {
    super (props);
      this.state = {
        activeKey: '1',
      }
      this.handleSelect = this.handleSelect.bind(this);

  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <PanelGroup id= "proj3" activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
        <h1 className="title">Title Of Project</h1>
        <Panel header="see" eventKey="1" className="see">
          <div className="panel-content">
            <div className="proj-visual"></div>
          </div>
        </Panel>
        <Panel header="read" eventKey="2" className="read">
          <div className="panel-content">
              <div className="proj-blurb">description</div>
              <div className="build-set">tool kit</div>
          </div>
        </Panel>
        <Panel header="link" eventKey="3" className="link">
          <div className="panel-content">
            <div>links</div>
          </div>
        </Panel>
      </PanelGroup>
    );
  }
}
