
import '../styles/site.css'
import imagem1 from '../imgs/autoescola1.jpeg'
import imagem2 from '../imgs/autoescola2.jpeg'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Carrossel = props => {
  return (
    <div className='carrossel'>

      <Carousel>
        <Carousel.Item interval={1500}>
          <img className='d-block w-100'
            src={imagem1}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className='d-block w-100'
            src={imagem2}
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>


    </div>
  )
}

export default Carrossel