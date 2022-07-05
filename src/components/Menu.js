import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Tour de viajes
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              Carrito
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
