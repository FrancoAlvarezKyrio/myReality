import React from 'react';
import { Nav , Navbar , NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
const NavBar = () => {

  return (
  <Navbar id='navBarDiv' expand="lg">
    <Container>
    <Link to='/'><img className='imagenLogo' src="images/growLogo.png"/></Link>
      <Navbar.Brand as="span"><Link id='navTitle' to="/">My Reality Grow</Link> </Navbar.Brand>
      <Navbar.Toggle id='navToggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='navCats' id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="span"><Link id='navHome' to="/">Home</Link> </Nav.Link>
                <NavDropdown id='navCats' title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item id='navCats' as="span"><Link id='navCats' to="/cat/vegetation">Vegetation</Link></NavDropdown.Item>
                  <NavDropdown.Item id='navCats' as="span"><Link id='navCats' to="/cat/flowering">Flowering</Link></NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link as="span"><Link id='navContact' to="contact">Contact</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
    <Link to="/cart"><CartWidget/></Link>
    </Container>
  </Navbar>

  )
};

export default NavBar;
