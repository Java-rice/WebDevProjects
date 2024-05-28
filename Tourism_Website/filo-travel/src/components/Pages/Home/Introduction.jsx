import React, { useState } from "react";
import "./Introduction.css";
import Carousel from "./Carousel/Carousel";
import CarouselContent from "./Carousel/CarouselContent";

const Introduction = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="introduction container">
      <div className="introduction-content">
        <Carousel setActiveSlide={setActiveSlide} />
        <div className="introduction-content-right">
          <CarouselContent activeSlide={activeSlide} />
          <button type="button">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
