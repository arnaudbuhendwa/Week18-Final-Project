import React from 'react';
import FitnessCarousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  // Using the useNavigate hook to get a function for navigation 
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/programs');
  };

  return (
    <div className="home-container"> {/* Container for the home page */}
      <FitnessCarousel />
      <div className="jumbotron-overlay">
        <div className="jumbotron-content">
          <h1 className="display-4">Welcome to Nado Fitness</h1>
          <p className="lead">Your go-to place for fitness programs and classes.</p>
          <hr className="my-4" /> {/* Horizontal line */}
          <p>Join us today and start your fitness journey!</p>
          <button className="btn btn-primary" onClick={handleGetStarted}>
            Get Started {/* Button to navigate to the '/programs' route */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
