import React, { Component } from 'react';

import '../styles/Intro.css';

// order links later
export default class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="name-wrap">
          <h2></h2>
          <h1><div id="nameSVG"></div></h1>
        </div>
      </div>
    )
  }
}
