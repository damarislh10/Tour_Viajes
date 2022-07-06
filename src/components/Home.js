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
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657041043/tour_viajes/Gallery-19_u9t1mk.jpg"
              alt="First slide"
            />
          </div>

          <Carousel.Caption>
            <div className="agencia">
              <h2 className="titleslider">Agencia de Viajes en Colombia</h2>
              <p className="text-slider">
                travel es una de las mejores agencias de viajes de Colombia,
                reconocida en el extranjero por organizar tours tipo trekking en
                la Sierra Nevada de Santa Marta con guías indígenas. Nos
                esforzamos siempre en destacar el ecoturismo y promover el
                turismo indígena en Colombia.
              </p>
              <div>
                <a
                  as={Link}
                  to="/articles"
                  className="destinoBtn"
                  style={{ backgroundColor: "#174a6d", color: "#ffffff" }}
                >
                  NUESTROS DESTINOS TURISTICOS
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenSlider"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657041135/tour_viajes/Gallery-17_f5hnwt.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="agencia">
              <h2 className="titleslider">DESTINOS QUE TE DAN LA BIENVENIDA</h2>
              <p className="text-slider">
                Y TE RECIBEN CON LAS PUERTAS ABIERTAS A SUS ESCENARIOS
                IMPERDIBLES
              </p>
              <div>
                <a
                  as={Link}
                  to="/articles"
                  className="destinoBtn"
                  style={{ backgroundColor: "#174a6d", color: "#ffffff" }}
                >
                  NUESTROS DESTINOS TURISTICOS
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenSlider"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657041197/tour_viajes/cache_6273042_ntxlu8.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="agencia">
              <h2 className="titleslider">
                GENTE CON LA QUE VIVIRÁS EXPERIENCIAS INOLVIDABLES
              </h2>
              <p className="text-slider">
                AUNQUE LAS REGIONES DE COLOMBIA SON MUY DIVERSAS, EN TODAS
                ENCONTRARÁS LA MISMA CALIDEZ QUE TE DA LA BIENVENIDA.
              </p>
              <div>
                <a
                  as={Link}
                  to="/articles"
                  className="destinoBtn"
                  style={{ backgroundColor: "#174a6d", color: "#ffffff" }}
                >
                  NUESTROS DESTINOS TURISTICOS
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Title text="Tours" />
    </div>
  );
};
