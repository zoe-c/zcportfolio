import React, { Component } from 'react';

import '../styles/App.css';

// order links later
export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li className="nav-link"><a href="#">Work</a></li>
          <li className="nav-link"><a href="#">About</a></li>
          <li className="nav-link"><a href="#">Contact</a></li>
          <li className="nav-link"><a href="#">Resume</a></li>
        </ul>
      </nav>
    )
  }
}
