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
              <p className="text-slider">
                travel es una de las mejores agencias de viajes de Colombia,
                reconocida en el extranjero por organizar tours tipo trekking en
                la Sierra Nevada de Santa Marta con guías indígenas. Nos
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
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657121074/tour_viajes/vistas-panor_C3_A1micas-los-jardines-de-huertos-campesinos-se-dividen-en-partes-marcadas-trozos-plantas-186355867_sq3x10.jpg"
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
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657121187/tour_viajes/campesinos-y-cultivos-de-bayas-vista-panor_C3_A1mica-un-granjero-parado-en-campo-con-una-bolsa-llena-sobre-su-hombro-225288044_nkvwnm.jpg"
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
