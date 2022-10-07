import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import RepLogo from '../assets/repsol_logo.png'

export default function Navigation() {
    return (
        <>
          <Navbar bg="light">
            <Container>
              <Navbar.Brand href="#home">
              <Nav.Link href="/">
                <img
                src={RepLogo}
                width="130"
                className="d-inline-block align-top"
                alt="Repsol Logo"
                />
              </Nav.Link>
              </Navbar.Brand>
              <Nav className="me-right">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/catalogo">Catálogo</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}
