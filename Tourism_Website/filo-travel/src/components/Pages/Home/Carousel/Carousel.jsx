import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import boracay_img from "../../assets/boracay_img.png";
import destination_bg from "../../assets/destination_bg.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={boracay_img} alt="Slide 1" className="carousel-image" />
        </div>
        <div>
          <img src={destination_bg} alt="Slide 2" className="carousel-image" />
        </div>
        <div>
          <img src={boracay_img} alt="Slide 3" className="carousel-image" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
