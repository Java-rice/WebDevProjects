import React from 'react';
import backgroundImage from '../../../assets/destination_bg.png'
import Hero from '../../Hero/Hero'
import './Destination.css'
import Spots from '../../TouristSpot/Spots'

const Destination = () => {
    const heroContent = {
        title: "Top 10 Tourist spots ",
        content: "",
        backgroundImage: backgroundImage 
      };
    
      return (
        <>
          <Hero title={heroContent.title} content={heroContent.content} backgroundImage={heroContent.backgroundImage} />
          <Spots/>
        </>
      );
};

export default Destination;