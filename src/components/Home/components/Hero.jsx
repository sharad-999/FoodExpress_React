import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="showcase" className="showcase-area">
      <div className="showcase-container">
        <h1 className="main-title" id="home">
          Welcome to <span className="text-red-600">Food Express</span>
        </h1>
        <p>Eat Healthy, It is good for our health.</p>
        <Link to="/menu" className="btn btn-primary">
          Menu
        </Link>
      </div>
    </div>
  );
};

export default Hero;
