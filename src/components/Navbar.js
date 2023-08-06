import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">  {/* Navbar with dark background */}
      <Navbar.Brand as={Link} to="/">Nado Fitness</Navbar.Brand> {/* Link to home */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for mobile view */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
          <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
          <Nav.Link as={Link} to="/members">Members</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
