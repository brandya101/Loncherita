import React from 'react'
import {Carousel} from 'react-bootstrap';
import slide1 from '../images/slider/1.jpg';
import slide2 from '../images/slider/2.jpg';
import slide3 from '../images/slider/3.jpg';

const Home = () =>
(
 <div>
    <Carousel className="car">
    <Carousel.Item>
      <img alt="space_1" src={slide1} />
    </Carousel.Item>
    <Carousel.Item>
      <img alt="space_2" src={slide2}/>
    </Carousel.Item>
    <Carousel.Item>
      <img alt="space_3" src={slide3}/>
    </Carousel.Item>
    </Carousel>
  </div>
)

export default Home;