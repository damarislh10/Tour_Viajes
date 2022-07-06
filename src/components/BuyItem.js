import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const BuyItem = () => {
  return (
    <div>
      <Container>
        <h2>Detalle de facturación</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiclastname">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pais o región</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <h2>Selecciona un método de pago</h2>
          <p>Especifica a continuación cómo te gustaría realizar el pago y lo guardaremos como opción.</p>
          <span>Agregar un método de pago</span>
          <hr/>
          <h5>Tarjetas de crédito o débito</h5>

          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder="Número de tarjeta *"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder="Nombre de tarjeta *"/>
          </Form.Group>
          </Form>
          <Button variant="primary" type="submit">
            Realizar pago
          </Button>
        </Form>
      </Container>
    </div>
  );
};
