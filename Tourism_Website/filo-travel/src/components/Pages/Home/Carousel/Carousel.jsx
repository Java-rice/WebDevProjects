import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import boracay_img from "../../../../assets/boracay_img.png";
import destination_bg from "../../../../assets/destination_bg.png";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(boracay_img);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "10px",
    beforeChange: (current, next) =>
      setActiveSlide(images[next % images.length]),
  };

  const images = [
    boracay_img,
    boracay_img,
    destination_bg,
    boracay_img,
    boracay_img,
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-background">
        <img
          src={activeSlide}
          alt="Destination Background"
          className="carousel-image"
        />
      </div>
      <div className="carousel-slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
