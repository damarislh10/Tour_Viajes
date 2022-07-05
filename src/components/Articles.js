import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const Articles = ({ tour }) => {
  return (
    <CardGroup>
      <Card  style={{ width: "10rem", height: "25rem" }}>
        <Card.Img variant="top" src={tour.imagen} />
        <Card.Body>
          <Card.Title>{tour.nombre}</Card.Title>
          <label>{tour.calificacion}</label>
        </Card.Body>
        <div className="container-price">
          <h3 className="preciotext">
            <span>COP $</span>
            {tour.precio}
          </h3>
        </div>
      </Card>
    </CardGroup>
  );
};
