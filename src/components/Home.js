import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Title } from "./Title";
import "../styles/styleHome.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="mb-5">
      <Carousel fade>
        <Carousel.Item>
          <div className="header">
            <img
              className="d-block w-100 imagenSlider"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657120916/tour_viajes/tours-con-guias-indigenas_ojvtd3.jpg"
              alt="First slide"
            />
          </div>

          <Carousel.Caption>
            <div className="agencia text1">
              <h2 className="titleslider">Agencia de Viajes en Colombia</h2>
              <p className="text-slider"> Nos
                esforzamos siempre en destacar el ecoturismo y promover el
                turismo indígena en Colombia.
              </p>
              <div>
                <Link
                  as={Link}
                  to="/articles"
                  className="destinoBtn"
                  style={{ backgroundColor: "#174a6d", color: "#ffffff" }}
                >
                  NUESTROS DESTINOS TURISTICOS
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenSlider"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657135986/tour_viajes/imagenes-de-ciudad-perdida_d6d8rv.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="agencia  text1">
              <h2 className="titleslider">DESTINOS QUE TE DAN LA BIENVENIDA</h2>
              <p className="text-slider">
                Y TE RECIBEN CON LAS PUERTAS ABIERTAS A SUS ESCENARIOS
                IMPERDIBLES
              </p>
              <div>
                <Link
                  as={Link}
                  to="/articles"
                  className="destinoBtn"
                  style={{ backgroundColor: "#174a6d", color: "#ffffff" }}
                >
                  NUESTROS DESTINOS TURISTICOS
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenSlider"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657136048/tour_viajes/blog-de-viajes-ciudad-perdida_sy0r9f.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="agencia text1">
              <h2 className="titleslider">
                Gente con la que vivirás experiencias inolvidables
              </h2>
              <p className="text-slider">
                Aunque las regiones de Colombia son muy diversas, en todas
                encontraras la misma calidez que te da la bienvenida.
              </p>
              <div>
                <Link
                  as={Link}
                  to="/articles"
                  className="destinoBtn"
                  style={{ backgroundColor: "#174a6d", color: "#ffffff" }}
                >
                  NUESTROS DESTINOS TURISTICOS
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Title text="Tours" />
    </div>
  );
};
