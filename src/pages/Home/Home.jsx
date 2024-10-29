import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import HowItWorks from "./HowItWorks";
import Icons from "./Icons";

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="mt-[1280px] md:mt-64">
        <Icons />
      </div>
      <Feature />
      <HowItWorks />
    </div>
  );
};

export default Home;

// Background:  (Mint Green) gives a fresh and vibrant feel without being too overwhelming.
// Primary Color: #2E7D32 (Emerald Green) for strong, attention-grabbing text and icons.
// Accent Color: #43A047 (Bright Green) for hover effects and icons to create vibrancy and excitement.
// Pure White: #FFFFFF — For clean backgrounds and text contrast.
// Light Grey (Subtle Accent): #F1F8E9

// #031C13 text color bg #063840
