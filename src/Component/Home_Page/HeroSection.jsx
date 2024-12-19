import React from "react";
import mobile_frame from "../../assets/Home Hero.png";
import Big_frame from "../../assets/Home Hero.png";
import StatRow from "./StatRow";
import StatRowOverlay from "./StatRowOverlay";

const HeroSection = () => {
  return (
    <div className="bg-[#FFFDF9] px-4 md:px-6 lg:px-20">
      {/* For small screens: Mobile frame at the top */}
      <div className="md:hidden flex justify-center">
        <img src={mobile_frame} alt="Mobile frame" className="w-full h-auto" />
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center">
        {/* Text section */}
        <div className="flex-1 pr-0 lg:pr-10 z-10">
          <div className="space-y-4">
            {/* Heading with updated font and color */}
            <h1 className="text-[28px] md:text-[48px] font-extrabold leading-[40px] md:leading-[72px] text-[#171717] font-[Red Hat Display] text-left">
              Experience flexibility, for any type of insurance claim
            </h1>

            {/* Paragraph with updated color */}
            <p className="text-[15px] md:text-[15px] leading-[24px] text-[#171717] text-left">
              Experience the future of insurance claims with our innovative
              technology. Fast, accurate, and hassle-free.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://calendly.com/kam-obai/meet-with-me?back=1&month=2024-12"
              className="py-3 px-6 rounded-[30px] bg-gradient-to-b from-[#FF711E] to-[#FF471E] text-[16px] font-bold text-[#FFFDF9] w-full sm:w-auto text-center hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Get Started
            </a>

            {/* Play button - Redirect to /how-we-started */}
            <a
              href="/how-we-started"
              className="w-full sm:w-auto flex items-center justify-center border-[2px] border-[#171717] rounded-[30px] p-[2px] hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              <div className="w-full sm:w-[56px] h-full flex items-center justify-center bg-[#FFFDF9] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#171717"
                  className="w-8 h-8"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Image section with overlay */}
        <div className="hidden md:flex relative flex-1 items-center justify-center">
          <img
            src={Big_frame}
            alt="Home frame"
            className="w-full h-auto z-0"
          />
          {/* StatRow Overlay */}
          <div className="absolute top-[74%] w-full max-w-[1200px] flex justify-center">
            <StatRowOverlay />
          </div>
        </div>
      </div>

      {/* Stats Row for small screens */}
      <div className="md:hidden flex justify-center mt-4 mb-3">
        <StatRow />
      </div>
    </div>
  );
};

export default HeroSection;
