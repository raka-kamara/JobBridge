import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import HowItWorks from "./HowItWorks";
import Icons from "./Icons";
import Testimonials from "./Testimonials";
import Category from "./Category";
import img from "../../assets/job.png";
import PopularCategory from "./PopularCategory";
import FAQ from "./FAQ";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulated 2-second load time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-[#C8E6C9]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#43A047]"></div>
            <div className="mt-4 flex items-center justify-center text-xl font-semibold text-[#2E7D32]">
              Loading <img className="w-8 h-8 ml-2" src={img} alt="JobBridge logo" /> JobBridge
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Banner />

          <div className="mt-[1280px] md:mt-80 lg:mt-64">
            <Icons />
          </div>

          <div className="mt-12 md:my-20">
            <Category />
          </div>

          <PopularCategory/>

          <Feature />
          <HowItWorks />
          <Testimonials />
          <FAQ/>
        </div>
      )}
    </div>
  );
};

export default Home;

// Background: #C8E6C9 (Mint Green) gives a fresh and vibrant feel without being too overwhelming.
// Primary Color: #2E7D32 (Emerald Green) for strong, attention-grabbing text and icons.
// Accent Color: #43A047 (Bright Green) for hover effects and icons to create vibrancy and excitement.
// Pure White: #FFFFFF — For clean backgrounds and text contrast.
// Light Grey (Subtle Accent): #F1F8E9

//  text #063840