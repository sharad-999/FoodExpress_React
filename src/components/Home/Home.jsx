import React from 'react';
import './styles/home.css';

import Hero from './components/Hero';
import About from './components/About';
import Food from './components/Food';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Food />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
