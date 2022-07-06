import React, { useEffect, useState } from "react";
import { listArticlesAsync } from "../redux/actions/actionArticles";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AddCarrito } from "../redux/actions/actionCarrito";
import Swal from "sweetalert2";
import "../styles/styleDetalle.css";

export const Detail = () => {
  const { articles } = useSelector((state) => state.articles);
  const [detailProduct, setDetailProduct] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(listArticlesAsync());
    const filterProduct = articles.find((tour) => tour.id === id);
    if (filterProduct !== undefined) {
      setDetailProduct(filterProduct);
    }
  }, []);
  return (
    <div>
      <Container className="container-detail my-5">
        <Row>
          <Col className="mt-5">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: detailProduct.imagen,
                },
                largeImage: {
                  src: detailProduct.imagen,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </Col>

          <Col>
            <h2 className="fs-5 fw-bold">{detailProduct.nombre}</h2>

            <h4 className="calificacion">
              <span>
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
                  alt="imgStar"
                />
              </span>
              <span>
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
                  alt="imgStar"
                />
              </span>
              <span>
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646778721/amazonasApp/icons8-estrella-48_s4emqg.png"
                  alt="imgStar"
                />
              </span>
              <span className="ms-3">{detailProduct.calificacion}</span>
            </h4>
            <p>
              <span>Precio:</span>{" "}
              <span className="precio">$ {detailProduct.precio}</span>
            </p>
            <hr />
            <ul>
              <h3>Acerca de este articulo</h3>
              {detailProduct.acerca_de != undefined
                ? detailProduct.acerca_de.map((acerca, index) => (
                    <li key={index} className="ms-4">
                      {acerca}
                    </li>
                  ))
                : ""}
            </ul>
          </Col>
          <Col xs lg="2">
            <div className="container-car mt-3">
              <h2 className="fs-5 fw-bold text-center">
                ¡Reserva tu cupo ahora!
              </h2>
              <p className="car-price">$ {detailProduct.precio}</p>
              <hr />

              <button
                onClick={() => {
                  dispatch(AddCarrito(detailProduct));
                  Swal.fire({
                    icon: "success",
                    title: "Agregado con exito",
                    showConfirmButton: true,
                    timer: 1500,
                  });
                }}
                className="btn-car w-100"
              >
                <div className="container-imgCar ms-1 me-2">
                  <img
                    src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646841839/amazonasApp/shopping-cart--v2_ezz0wb.png"
                    alt="carImg"
                  />
                </div>
                Agregar al carrito
              </button>
              <Link to="/compra">
                <button className="btn-car w-100">
                  <div className="container-imgCar ms-1 me-2">
                    <img
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646841901/amazonasApp/circled-play_n9mvhu.png"
                      alt="comprarImg"
                    />
                  </div>
                  Comprar ahora
                </button>
              </Link>
              <p className="stylBlue text-center">Transaciòn segura</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
