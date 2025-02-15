import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";

import carousel1 from "../assets/banner-background.jpg";

const images = [{ src: carousel1 }, { src: carousel1 }, { src: carousel1 }];

function CarouselComponent() {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image.src} alt="Carousel Image" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
