import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import '../styles/NavBar.css';

// order links later
export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="navbar" fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#intro">z c </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav pullRight>
            <NavItem  title="Item" href="#">about</NavItem>
            <NavItem  title="Item" href="#work">work</NavItem>
            <NavItem  title="Item" href="#">resume</NavItem>
            <NavItem  title="Item" href="#">contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

// place back if in Nav if you want to have onSelect event.
// onSelect={handleSelect}
// place back in respective NavLinks if you want to have onSelect event.
// eventKey={1}
// eventKey={2}
// eventKey={3}
