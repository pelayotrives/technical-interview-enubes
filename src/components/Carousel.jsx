import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Forest from "../assets/background_forest.jpg";
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";

export default function CardsImages() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>Nuestro compromiso</h3>
            <p>
              Queremos un mundo libre de emisiones para 2050 y trabajamos duro
              en ello.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Proyectos paralelos</h3>
            <p>
              Repsol lleva años fomentando las energías renovables y otros
              proyectos ecológicos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Sedes</h3>
            <p>
              Estamos presentes en más de 60 países y crecemos día a día para
              estar cerca de tí.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
