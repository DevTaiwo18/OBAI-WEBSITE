import React from 'react';
import imagebanner from '../../assets/image-banner.png'; // Ensure this is the correct path to the image

const HowWeStarted = () => {
  return (
    <div className="py-10 md:py-16 px-4 md:px-20">
      {/* Container for How We Started Section */}
      <div className="how-we-started-container gap-0 md:gap-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="how-we-started md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-4">How we started</h1> {/* Updated to brand black */}
          <p className="text-[#606060]">
            OBAAI began as an open garage concept during the Flyer Pitch Competition, founded by Kameron Seabrook.
            Initially focused on automotive care, the company evolved, adapting to market needs.
            <br /><br />
            Today, OBAAI stands at the forefront of technological innovation, specializing in streamlining the insurance 
            claims process, making it faster and more efficient for everyone.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="image-banner md:w-1/2 flex justify-center">
          <img
            src={imagebanner}
            alt="Kameron"
            className="rounded-lg w-full h-auto object-cover"
            width={750}
            height={593}
          />
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="mission-background mt-12 bg-[#F0F4FF] py-8 px-4 rounded-lg"> {/* Updated to the brand light background */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#171717] text-center mb-4">Mission Statement</h1> {/* Updated to brand black */}
        <p className="text-center text-[#606060] max-w-4xl text-sm mx-auto">
          Revolutionize insurance claims with cutting-edge technology and an enhanced user experience, 
          ensuring swift, efficient, and stress-free service.
        </p>
      </div>
    </div>
  );
};

export default HowWeStarted;
