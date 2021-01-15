import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Toggle from "../toggle";

class MyNavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{
            marginBottom: "25px",
            background: this.props.background,
          }}
        >
          <Navbar.Brand href="/">
            <img
              src="https://avatars1.githubusercontent.com/u/45690149?s=460&u=f2098e3744b35e5ef0fc7ba1715a1acecdd4ba02&v=4"
              style={{ height: "4vh" }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about" style={{ color: this.props.textColor }}>
                About
              </Nav.Link>
              <Nav.Link
                href="#publications"
                style={{ color: this.props.textColor }}
              >
                Publications
              </Nav.Link>
              <Nav.Link
                href="#software"
                style={{ color: this.props.textColor }}
              >
                Software
              </Nav.Link>
              <Nav.Link
                href="#education"
                style={{ color: this.props.textColor }}
              >
                Education
              </Nav.Link>
              <Nav.Link href="#contact" style={{ color: this.props.textColor }}>
                Contact
              </Nav.Link>
              <Nav.Link href="#Blog" style={{ color: this.props.textColorUnavailable }}>
                Blog
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Toggle
                theme={this.props.theme}
                toggleTheme={this.props.onToggleTheme}
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default MyNavBar;
