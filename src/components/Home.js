import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Title } from "./Title";

export const Home = () => {
  return (
    <div className="mb-5">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657041043/tour_viajes/Gallery-19_u9t1mk.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657041135/tour_viajes/Gallery-17_f5hnwt.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1657041197/tour_viajes/cache_6273042_ntxlu8.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Title text="Tours" />
    </div>
  );
};
