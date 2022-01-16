import React from "react";
import { Carousel } from "react-bootstrap";

function Hero() {
  return (
    <header id="hero">
      <Carousel variant="dark" className="carousel__container">
        <Carousel.Item className="background">
          <img
            className="d-block w-100 header__img"
            src="https://images.unsplash.com/photo-1521175776577-f8e0c1e5ecb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="content">
            <h5>Welcome to OKTeller</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="background">
          <img
            className="d-block w-100 header__img"
            src="https://images.unsplash.com/photo-1496381273223-e4ad4e99f5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />
          <Carousel.Caption className="content">
            <h5>Welcome to OKTeller</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="background">
          <img
            className="d-block w-100 header__img"
            src="https://images.unsplash.com/photo-1616588181775-138dc8ba4197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption className="content">
            <h5>Welcome to OKTeller</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="background">
          <img
            className="d-block w-100 header__img"
            src="https://images.unsplash.com/photo-1496381273223-e4ad4e99f5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption className="content">
            <h5>Welcome to OKTeller</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="background">
          <img
            className="d-block w-100 header__img"
            src="https://images.unsplash.com/photo-1496381273223-e4ad4e99f5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Fourth slide"
          />
          <Carousel.Caption className="content">
            <h5>Welcome to OKTeller</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      ;
    </header>
  );
}

export default Hero;
