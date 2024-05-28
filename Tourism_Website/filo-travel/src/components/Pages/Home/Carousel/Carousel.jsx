import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import boracay_img from "../../../../assets/boracay_img.png";
import destination_bg from "../../../../assets/destination_bg.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src={boracay_img}
            alt="White Beach, Boracay"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={destination_bg}
            alt="Chocolate Hills, Bohol"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Puerto Princesa Underground River, Palawan"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Cloud 9, Siargao"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Cebu Beaches and Diving Spots"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Banaue Rice Terraces, Ifugao"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Rizal Park, Manila"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Kayangan Lake"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Taal Volcano, Batangas"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={boracay_img}
            alt="Mayon Volcano"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;