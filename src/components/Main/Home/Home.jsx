import React, { Component } from "react";
// import ListNews from "./ListNews";
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'



class Home extends Component {
  
  render() {
    return <section className="home">
     <Carousel    className=" w-100">
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ukrania el paìs del aceite de Girasol</h3>
      <p>La guerra de ukrania provoca una subida historica en el precio del aciete de Girasol</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>El real Madrid </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </section>;
  }
}

export default Home;
