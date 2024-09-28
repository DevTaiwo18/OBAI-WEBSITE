import React from 'react';
import image1 from '../../assets/man-car.png'; 
import image2 from '../../assets/man-car1.png'; 
import image3 from '../../assets/man-car2.png'; 

const WhoWeAre = () => {
  return (
    <div className="py-10 md:py-16 px-4 md:px-20">
      {/* Section Title */}
      <div className="text-center mb-5 md:mb-12">
        <h3 className="text-lg text-[#FF5F1E] mb-2">ABOUT</h3> {/* Updated to brand orange */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#171717]">Who we are</h1> {/* Updated to brand black */}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First large image */}
        <div className="man-image">
          <img
            src={image1}
            alt="man snapping back of car"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        {/* Two smaller images stacked */}
        <div className="flex flex-col space-y-8">
          <img
            src={image2}
            alt="man facing car backwards"
            className="rounded-lg w-full h-auto object-cover"
          />
          <img
            src={image3}
            alt="man facing car sideways"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
