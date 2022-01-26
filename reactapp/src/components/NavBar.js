import React from 'react';
import { Nav , Navbar , NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as="span"><Link to="/">React-Bootstrap</Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as="span"><Link to="/">Home</Link> </Nav.Link>
        <Nav.Link as="span"><Link to="contact">Contact</Link></Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item as="span"><Link to="/cat/electronics">Electronics</Link></NavDropdown.Item>
          <NavDropdown.Item as="span"><Link to="/cat/jewelery">Jewelery</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <CartWidget/>
</Navbar>

  )
};

export default NavBar;
