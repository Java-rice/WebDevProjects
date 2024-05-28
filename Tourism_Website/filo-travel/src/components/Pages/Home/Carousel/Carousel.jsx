import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import slide1 from "../../../../assets/slide1.png";
import slide2 from "../../../../assets/slide2.png";
import slide3 from "../../../../assets/slide3.png";
import slide4 from "../../../../assets/slide4.png";
import slide5 from "../../../../assets/slide5.png";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(slide2);

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
      setActiveSlide(images[(next + 1) % images.length]),
  };

  const images = [slide1, slide2, slide3, slide4, slide5];

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
