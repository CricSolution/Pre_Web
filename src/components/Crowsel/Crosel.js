import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./crosel.css";
import { Container, Button } from "react-bootstrap";
import img2 from "../../assests/img2.jpg";
import img3 from "../../assests/img3.jpg";

function Crosel() {
  return (
    <Carousel data-bs-theme="dark" className="crosel-image">
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://images.unsplash.com/photo-1589801258579-18e091f4ca26?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <Container className="crousel-text">
            <h1 className="display-9 fw-bold">Welcome to Cric Solution</h1>
            <p className="lead fst-italic">
              Based in Bangalore, CricSolution provides professional
              officiating for cricket matches, upholding the values of fair
              play and competition.
            </p>
            <a
              href="https://chat.whatsapp.com/EZpBI7foP6uEcwDF1CybaR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="btn btn-info"
                size="lg"
                className="hero-button"
              >
                Join our Passionate Community
              </Button>
            </a>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 image" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <Container>
            <h1 className="display-9 fw-bold">Welcome to CricSolution</h1>
            <p className="lead fst-italic">
              Based in Bangalore, CricSolution provides professional
              officiating for cricket matches, upholding the values of fair
              play and competition.
            </p>
            <a
              href="https://chat.whatsapp.com/EZpBI7foP6uEcwDF1CybaR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="btn btn-info"
                size="lg"
                className="hero-button"
              >
                Join our Passionate Community
              </Button>
            </a>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 image" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <Container>
            <h1 className="display-9 fw-bold">Welcome to Cric Solution</h1>
            <p className="lead fst-italic">
              Based in Bangalore, CricSolution provides professional
              officiating for cricket matches, upholding the values of fair
              play and competition.
            </p>
            <a
              href="https://chat.whatsapp.com/EZpBI7foP6uEcwDF1CybaR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="btn btn-info"
                size="lg"
                className="hero-button"
              >
                Join our Passionate Community
              </Button>
            </a>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crosel;
