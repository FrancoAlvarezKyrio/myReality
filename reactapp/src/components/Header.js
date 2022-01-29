import React from 'react';
import {  Carousel , } from 'react-bootstrap';

const Header = () => {
  return (
  <div>
      <Carousel fade>
  <Carousel.Item>
    <img id='bannerImg' className="d-block w-100" src="/images/bannerFlowerPower.jpeg" alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img id='bannerImg' className="d-block w-100" src="/images/bannerTopCrop.jpg" alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img id='bannerImg' className="d-block w-100" src="/images/bannerLogos.jpg"  alt="Third slide" />
  </Carousel.Item>
</Carousel>
  </div>)
};

export default Header;
