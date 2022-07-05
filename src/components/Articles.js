import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../styles/styleProduct.css";

export const Articles = ({ tour }) => {
  return (
    <CardGroup>
      <Card style={{ width: "20rem" }}>
        <Card.Img className="imgCard" src={tour.imagen} />
        <Card.Body className="body-article">
          <Card.Title>{tour.nombre}</Card.Title>
          <span className="ms-3">
            <img
              className="imgStar"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
              alt="imgStar"
            />
          </span>
          <label>{tour.calificacion}</label>
        </Card.Body>
        <div className="container-price">
          <h3 className="preciotext ms-3">
            <span>COP $</span>
            {tour.precio}
          </h3>
          <span className="me-3">
            <img
              className="imgStar"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657050506/tour_viajes/icons8-promedio-2-48_xpbhdo.png"
              alt="imgStar"
            />
          </span>
        </div>
      </Card>
    </CardGroup>
  );
};
