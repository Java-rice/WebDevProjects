import React from 'react';
import './Hero.css';

const Hero = ({ title, content, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className='hero container' style={heroStyle}>
      <div className="title-text">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Hero;