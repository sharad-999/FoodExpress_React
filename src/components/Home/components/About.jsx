import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-wrapper container-home">
        <div className="about-text">
          <p className="small">About Us</p>
          <h2>We've been making healthy food last for 10 years.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            esse dolorem velit quas porro. Quod, deleniti, blanditiis aut
            cupiditate esse earum molestias repellendus aperiam, a excepturi
            incidunt numquam maxime natus!
          </p>
        </div>
        <div className="about-img">
          <img src="/Assets/Images/about.jpg" alt="food" />
        </div>
      </div>
    </section>
  );
};

export default About;
