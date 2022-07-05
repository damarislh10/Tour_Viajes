import React, { useEffect, useState } from "react";
import { listArticlesAsync } from "../redux/actions/actionArticles";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

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
          <Col xs={1} className="col-img">
            <button className="mt-4">
              <img
                className="imgSecund"
                src={detailProduct.imagen}
                alt="img1"
              />
            </button>
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
              <span className="stylBlue">Detalles</span>
            </p>

            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
