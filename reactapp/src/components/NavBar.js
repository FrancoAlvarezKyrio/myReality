import React from 'react';
import { Nav , Navbar , NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
  <Navbar bg="light" expand="lg">
    <Container>
    <img className='imagenLogo' src="logo192.png"/>
      <Navbar.Brand as="span"><Link to="/">My Reality Grow</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="span"><Link to="/">Home</Link> </Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item as="span"><Link to="/cat/vegetation">Vegetation</Link></NavDropdown.Item>
                  <NavDropdown.Item as="span"><Link to="/cat/flowering">Flowering</Link></NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link as="span"><Link to="contact">Contact</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
    <Link to="/cart"><CartWidget/></Link>
    </Container>
  </Navbar>

  )
};

export default NavBar;
