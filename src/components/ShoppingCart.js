import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BorrarCarrito } from "../redux/actions/actionCarrito";
import { useNavigate } from "react-router-dom";

import "../styles/styleCarrito.css";

export const ShoppingCart = () => {
  const { carrito } = useSelector((state) => state.carrito);
  const [subtotal, setSubtotal] = useState({
    price: 0,
    cant: 0,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(BorrarCarrito(id));
    window.location.reload();

  };
  const handleVaciar = () => {
    localStorage.setItem("carrito", JSON.stringify([]));
    window.location.reload();
  };

  useEffect(() => {
    let subtotalS = 0;
    let cont = 0;
    carrito.map((c) => (cont++, (subtotalS += c.precio)));
    setSubtotal({
      price: Intl.NumberFormat('es-DE').format(subtotalS),
      cant: cont,
    });
  }, [carrito]);

  return (
    <div className="pt-5" style={{ backgroundColor: "#EAEDED" }}>
      <Container className="container-carrito">
        <h1 className="mb-5">Mis viajes</h1>
        <Row>
          <Col>
            {carrito.map((product) => (
              <Card key={product.id} style={{ width: "63rem" }}>
                <Card.Body>
                  <Row>
                    <Col className="container-img-car" xs={3}>
                      <Card.Img className="img-car ms-3" src={product.imagen} />
                    </Col>
                    <Col xs={6}>
                      <div className="d-flex">
                        <Card.Title>{product.nombre}</Card.Title>
                      </div>
                      <Card.Text>
                        <label className="enabled">Disponible</label>
                        <br />
                        <label>Reserva en cualquier lugar</label>
                        <br />
                      </Card.Text>

                      <Button
                        className="btn-danger btndelete"
                        onClick={() => handleDelete(product.id)}
                      >
                        Eliminar
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <h5>COP $ {Intl.NumberFormat('es-DE').format(product.precio)}</h5>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            <Button className="vaciarCarrito mt-4" onClick={handleVaciar}>
              Anular la selección de todos los articulos
            </Button>
          </Col>

          <Col xs lg="3">
            <div className="container-car mt-3">
              <p className="car-price car-subtotal">
                Subtotal ({`${subtotal.cant} productos:`})
                <span className="priceSub fw-bold">
                  {` COP $ ${subtotal.price} `}{" "}
                </span>
              </p>
              <Button
                onClick={() => {
                  navigate("/compra");
                }}
                className="w-100 mt-3"
                variant="primary"
                type="submit"
              >
                PROCEDER AL PAGO
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
