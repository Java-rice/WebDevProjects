import React from "react";
import Hero from "../../Hero/Hero";
import "./Home.css";
import backgroundImage from "../../../assets/home_bg.png";
import Footer from "../../../components/Footer/Footer";

const Home = () => {
  const heroContent = {
    title: "It’s More Fun in the Philippines!",
    content:
      "Welcome to the Philippines, where every day is an opportunity for excitement and joy. With over 7,000 islands teeming with natural wonders, rich cultures, and thrilling activities, there's always something new to discover. Come and see why it’s more fun in the Philippines!",
    backgroundImage: backgroundImage,
  };

  return (
    <>
      <Hero
        title={heroContent.title}
        content={heroContent.content}
        backgroundImage={heroContent.backgroundImage}
      />
      <div className="introduction container"></div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
