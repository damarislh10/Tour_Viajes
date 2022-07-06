import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../styles/styleBuyItem.css";

export const BuyItem = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Compra Realizada!",
      text: "La compra se ha realizado de manera exitosa.",
      showConfirmButton: true,
      timer: 1500,
    });

    navigate("/");
  };

  return (
    <div>
      <Container className="mb-5">
        <h2 className="my-5">Detalle de facturación</h2>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Col xs lg="5">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiclastname">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pais o región</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTel">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
          </Col>
          <hr />
          <h2 className="my-4">Selecciona un método de pago</h2>
          <p>
            Especifica a continuación cómo te gustaría realizar el pago y lo
            guardaremos como opción.
          </p>
          <span className="fw-bold">Agregar un método de pago</span>
          <hr />
          <span>Tarjetas de crédito o débito</span>
          <Row>
            <Col>
              <Form.Group className="mb-3 mt-4" controlId="formBasicNumber">
                <Form.Control
                  type="number"
                  placeholder="Número de tarjeta *"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNametarjet">
                <Form.Control
                  type="text"
                  placeholder="Nombre de tarjeta *"
                  required
                />
              </Form.Group>
              <Button className="w-100 mt-3" variant="primary" type="submit">
                REALIZAR PAGO
              </Button>
            </Col>
            <Col xs lg="7">
              <img
                className="imagenTarjet"
                src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657117369/tour_viajes/tarjetas_ajx7jk_xurwqr.png"
                alt="tarjetas"
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
