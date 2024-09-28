import React from 'react';
import BG from "./../../assets/Rectangle 38.png";

const SomeReading = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#171717]">Some light reading</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            style={{backgroundImage: `url(${BG})`}}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent" style={{ width: '65%' }}></div>
          <div className="relative h-full flex items-center">
            <h3 className="text-white text-lg font-bold leading-tight p-6 w-1/2">Innovative Solutions for Hassle-Free Claims</h3>
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
            style={{backgroundImage: `url(${BG})`}}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent" style={{ width: '65%' }}></div>
          <div className="relative h-full flex items-center">
            <h3 className="text-white text-lg font-bold leading-tight p-6 w-1/2">Streamlined Processes for Better Service</h3>
          </div>
        </div>

        {/* Card 3 */}
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
            style={{backgroundImage: `url(${BG})`}}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent" style={{ width: '65%' }}></div>
          <div className="relative h-full flex items-center">
            <h3 className="text-white text-lg font-bold leading-tight p-6 w-1/2">Customer-Centric Approach in Every Interaction</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomeReading;