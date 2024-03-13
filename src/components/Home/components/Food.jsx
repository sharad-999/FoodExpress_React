import React from 'react';
import { Link } from 'react-router-dom';

const Food = () => {
  return (
    <div id="food">
      <h2>Types of Food</h2>
      <div className="food-container container-home">
        <div className="food-type fruit">
          <div className="img-container">
            <img src="/Assets/Images/type1.jpg" alt="burger" />
            <div className="img-content">
              <h3>Spanish</h3>
              <Link to="#" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="food-type veg">
          <div className="img-container">
            <img src="/Assets/Images/type2.png" alt="pasta" />
            <div className="img-content">
              <h3>Italian</h3>
              <Link to="#" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="food-type grain">
          <div className="img-container">
            <img src="/Assets/Images/type3.jpg" alt="grain" />
            <div className="img-content">
              <h3>Chineese</h3>
              <Link to="#" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
