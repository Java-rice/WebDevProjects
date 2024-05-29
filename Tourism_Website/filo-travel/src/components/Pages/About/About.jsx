import React from "react";
import backgroundImage from "../../../assets/about_bg.png";
import Hero from "../../Hero/Hero";
import MissionSection from "../../../components/MissionSection/MissionSection";
import Footer from "../../../components/Footer/Footer";
import "./About.css";

const About = () => {
  const heroContent = {
    title: "Who we are",
    content:
      "Welcome to Filo Travel! We are a passionate group dedicated to showcasing the beauty and cultural richness of the Philippines. Our goal is to inspire locals and international travelers to discover the hidden gems and iconic landmarks of our archipelago.",
    backgroundImage: backgroundImage,
  };

  return (
    <>
      <Hero
        title={heroContent.title}
        content={heroContent.content}
        backgroundImage={heroContent.backgroundImage}
      />
      <MissionSection />
      <Footer />
    </>
  );
};

export default About;
