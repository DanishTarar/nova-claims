import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBalanceScale } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-light bg-light fixed-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center brand-logo gap-2">
          <FaBalanceScale className="brand-logo-icon" />
          <span className="logo-placeholder mb-0">Nova Accident claim</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="active">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#form" className="ms-lg-3 btn btn-primary">
              Free Consultation
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;