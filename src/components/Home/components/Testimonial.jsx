import React from 'react';

const Testimonial = () => {
  return (
    <div id="testimonials">
      <h2 className="testimonial-title">What Our Customer Say?</h2>
      <div className="testimonial-container container-home">
        <div className="testimonial-box">
          <div className="customer-detail">
            <div className="customer-photo">
              <img
                src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg"
                alt="first"
              />
              <p className="customer-name">Ross Lee</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <p className="testimonial-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus impedit.
          </p>
        </div>
        <div className="testimonial-box">
          <div className="customer-detail">
            <div className="customer-photo">
              <img
                src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                alt="second"
              />
              <p className="customer-name">Sara</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star-half-alt checked"></span>
          </div>
          <p className="testimonial-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus impedit.
          </p>
        </div>
        <div className="testimonial-box">
          <div className="customer-detail">
            <div className="customer-photo">
              <img
                src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg"
                alt="third"
              />
              <p className="customer-name">John</p>
            </div>
          </div>
          <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="far fa-star checked"></span>
            <span className="far fa-star checked"></span>
          </div>
          <p className="testimonial-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus impedit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
