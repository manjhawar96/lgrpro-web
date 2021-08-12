import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
  
  
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container>
        <Link className="link" to="/">
          LGR
        </Link>
        {/*}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="link" eventKey={1} to="/">
              About us
            </Link>
            
          </Nav>
  </Navbar.Collapse>*/}
      </Container>
          </Navbar>
  );
}
