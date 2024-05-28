import React from "react";
import "./CarouselContent.css";

const carouselContent = ({ title, subtitle, content }) => {
  return (
    <div className="carousel-content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{content}</p>
    </div>
  );
};

export default carouselContent;
