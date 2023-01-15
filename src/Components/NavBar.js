import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../Assests/images/YOGO.png';
import './NavBar.css';
function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="NavBar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="not found" className="w-75 h-75" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/" className="text-white text-decoration-none active">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Service" className="text-white text-decoration-none">
                  SERVICES
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Review" className="text-white text-decoration-none">
                  REVIEW US
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Login" className="text-white text-decoration-none">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/Register"
                  className="text-white text-decoration-none"
                >
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
