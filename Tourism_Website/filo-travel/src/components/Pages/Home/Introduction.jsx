import React from "react";
import "./Introduction.css";
import Carousel from "./Carousel/Carousel";
import CarouselContent from "./Carousel/CarouselContent";

const slideContent = {
  title: "Island Adventures Await",
  subtitle: "Uncover the Secrets of Pristine Beaches",
  content:
    "Imagine yourself basking under the golden sun, with crystal-clear waters and powdery white sands beneath your feet. The Philippines is home to some of the world's most beautiful beaches, each offering a unique slice of paradise. Whether you’re looking for a quiet retreat or a lively beach party, you’ll find the perfect spot here.",
};

const Introduction = () => {
  return (
    <div className="introduction container">
      <div className="introduction-content">
        <Carousel />
        <div className="introduction-content-right">
          <CarouselContent
            title={slideContent.title}
            subtitle={slideContent.subtitle}
            content={slideContent.content}
          />
          <button type="button">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
