import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/styleProduct.css";

export const Articles = ({ tour }) => {
  return (
    <Card className="car-cont mt-5" style={{ width: "23rem"}}>
      <Card.Img className="imgCard" src={tour.imagen} />
      <Card.Body className="body-article">
        <Card.Title className="nombre">{tour.nombre}</Card.Title>
        <span className="ms-3">
          <img
            className="imgStar"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
            alt="imgStar"
          />
        </span>
        <label>{tour.calificacion}</label>
      </Card.Body>
      <div className="container-price w-100">
        <h4 className="preciotext ms-3 fs-5">
          <span>COP $</span>
          {Intl.NumberFormat("es-DE").format(tour.precio)}
        </h4>
      </div>
      <p className="ms-3 parrafo_initial">{tour.texto_inicial} </p>
    </Card>
  );
};
