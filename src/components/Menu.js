import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/styleMenu.css";
export const Menu = () => {
  return (
    <div>
      <Row>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Col className="col-nav">
            <Navbar.Brand as={Link} to="/">
            <img
              style={{ width: "150px" }}
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657079965/tour_viajes/23d0caf8a327a157db8c70490074e061-removebg-preview_gtjxrk_nhi1tk.png"
              alt="imgamzonas"
            />
          </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Nosotros
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav.Link className="car-icon" as={Link} to="/carrito">
                <div>
                  <Navbar.Brand className="misViajes" as={Link} to="/carrito">
                    <img
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646535797/amazonasApp/shopping-cart_muujty.png"
                      alt="car"
                    />
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/carrito">Mis viajes</Nav.Link>
                    </Nav>
                  </Navbar.Brand>
                </div>
              </Nav.Link>
            </Col>
          </Container>
        </Navbar>
      </Row>
    </div>
  );
};
