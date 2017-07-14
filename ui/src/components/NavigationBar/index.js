import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'
import './style.css'

const NavigationBar = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Posts</NavItem>
        <NavItem eventKey={2} href="#">Profile</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">User Name</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar