import React from "react";
import "./Introduction.css";
import Carousel from "./Carousel/Carousel";

const Introduction = () => {
  return (
    <div className="introduction container">
      <div className="introduction-content">
        <Carousel />
        <div className="introduction-content-right">
          <h1>Introduction</h1>
          <h2>Welcome to Paradise</h2>
          <p>
            Experience the Philippines like never before. Our vibrant islands
            are brimming with diverse cultures, breathtaking landscapes, and
            unique adventures that await you. Whether you seek serene beaches,
            historical landmarks, or exhilarating activities, the Philippines
            offers a perfect blend of everything you dream of in a travel
            destination.
          </p>
          <button type="button">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
