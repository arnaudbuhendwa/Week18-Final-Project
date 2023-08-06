import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="footer-navbar"> {/* Navbar with dark background */}
      <div className="mx-auto">
        <Nav>
          {/* Create a link to the 'Contact' page using react-router-dom */}
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Footer;