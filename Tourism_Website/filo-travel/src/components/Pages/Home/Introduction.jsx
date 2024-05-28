import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Introduction.css";
import Carousel from "./Carousel/Carousel";
import CarouselContent from "./Carousel/CarouselContent";

const Introduction = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate("/destination");
  };

  return (
    <div className="introduction container">
      <div className="introduction-content">
        <Carousel setActiveSlide={setActiveSlide} />
        <div className="introduction-content-right">
          <CarouselContent activeSlide={activeSlide} />
          <button type="button" onClick={handleExploreNow}>
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
