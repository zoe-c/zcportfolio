import React, { Component } from 'react';

import '../styles/MainBody.css';

// import components
import NavBar from './NavBar.js'

export default class MainBody extends Component {
  render() {
    return (
        <div className="main-body">
          <NavBar />
        </div>
    )
  }
}
