import React from "react";
import "./CarouselContent.css";

const slideContents = [
  {
    title: "Island Adventures Await",
    subtitle: "Conquer Majestic Mountains",
    content:
      "For the adventurous at heart, the Philippines offers a variety of thrilling mountain treks and hikes. Discover lush forests, hidden waterfalls, and breathtaking views from the country’s highest peaks. Each trail promises an unforgettable adventure for nature enthusiasts and thrill-seekers alike.",
  },
  {
    title: "Dive into Marine Wonders",
    subtitle: "Discover the Philippines' Surfing Paradise",
    content:
      "Surfing enthusiasts will find some of the best waves in the world on our shores. Whether you’re a seasoned pro or a beginner looking to catch your first wave, the Philippines’ surf spots offer perfect conditions and stunning coastal views.",
  },
  {
    title: "Adventure and Thrills",
    subtitle: "Conquer Majestic Mountains",
    content:
      "For the adventurous at heart, the Philippines offers a variety of thrilling mountain treks and hikes. Discover lush forests, hidden waterfalls, and breathtaking views from the country’s highest peaks. Each trail promises an unforgettable adventure for nature enthusiasts and thrill-seekers alike.",
  },
  {
    title: "Ride the Waves",
    subtitle: "Discover the Philippines' Surfing Paradise",
    content:
      "Surfing enthusiasts will find some of the best waves in the world on our shores. Whether you’re a seasoned pro or a beginner looking to catch your first wave, the Philippines’ surf spots offer perfect conditions and stunning coastal views.",
  },
  {
    title: "Cultural Journeys",
    subtitle: "Step Back in Time",
    content:
      "Journey through the rich history and heritage of the Philippines. Visit ancient churches, historical landmarks, and cultural sites that tell the story of our nation’s colorful past. Each location offers a glimpse into the Philippines’ rich traditions and resilient spirit.",
  },
];

const CarouselContent = ({ activeSlide }) => {
  const { title, subtitle, content } = slideContents[activeSlide];

  return (
    <div className="carousel-content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{content}</p>
    </div>
  );
};

export default CarouselContent;
