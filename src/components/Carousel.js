import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Carousel.css'; 
import CardioImage from '../images/Cardio.jpeg'; 
import StrengthImage from '../images/Strength.jpeg'
import YogaImage from '../images/Yoga.jpeg'  


const FitnessCarousel = () => {  
  return (
    <Carousel className="fitness-carousel"> {/* Apply custom CSS class for styling */}
      <Carousel.Item>
        <img
          className="d-block w-100" // Set image display properties
          src={CardioImage}  
          alt="Fitness 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={StrengthImage} 
          alt="Fitness 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={YogaImage} 
          alt="Fitness 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default FitnessCarousel;
