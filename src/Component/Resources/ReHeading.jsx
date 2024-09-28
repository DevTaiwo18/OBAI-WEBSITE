import React from 'react';
import resourceIcons from '../../assets/resources_hero.png';
import BG from '../../assets/Rectangle 38.png';

const ReHeading = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-20">
      {/* Subtitle */}
      <div className="text-center mb-2">
        <p className="text-sm text-[#FF5F1E] mb-2">TIPS, TRICKS, & MORE</p>
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl font-extrabold text-[#171717] mb-8">Resources</h1>

      {/* Main Section with Image and Content Cards beside each other */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section: Resource Icons */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={resourceIcons} alt="Resource Icons" className="w-full h-auto" />
        </div>

        {/* Right Section: Content Cards */}
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-[30px] overflow-hidden shadow-lg h-48"
            style={{
              boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                          22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                          13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                          6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                          1px 7px 15px 0px rgba(23, 23, 23, 0.05)`
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${BG})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent md:w-[65%] w-[75%]"></div>
            <div className="relative h-full flex items-center">
              <h3 className="text-white text-lg font-bold leading-tight p-6 w-1/2">
                Innovative Solutions for Hassle-Free Claims
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-[30px] overflow-hidden shadow-lg h-48"
            style={{
              boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                          22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                          13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                          6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                          1px 7px 15px 0px rgba(23, 23, 23, 0.05)`
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${BG})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent md:w-[65%] w-[75%]"></div>
            <div className="relative h-full flex items-center">
              <h3 className="text-white text-lg font-bold leading-tight p-6 w-1/2">
                Efficient Processes to Enhance Your Workflow
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReHeading;
