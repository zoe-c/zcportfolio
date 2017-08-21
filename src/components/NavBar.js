import React, { Component } from 'react';

import '../styles/NavBar.css';

// order links later
export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li className="nav-link"><a href="#">work</a></li>
          <li className="nav-link"><a href="#">about</a></li>
          <li className="nav-link"><a href="#">contact</a></li>
          <li className="nav-link"><a href="#">resume</a></li>
        </ul>
      </nav>
    )
  }
}
