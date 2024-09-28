import React from 'react';
import tech from "../../assets/Rectangle 38.png";

const OurTech = () => {
  return (
    <div className="App">
      <div className="about py-5 md:py-12 px-4 md:px-8 lg:px-20">
        <div className="text-center mb-10">
          <h3 className="text-lg text-brand-primary">How it works</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#171717]">Our Tech</h1>
        </div>

        <div className="tech-image relative flex justify-center">
          <div 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${tech})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[56px] h-[50px] flex items-center justify-center border-[2px] border-[#171717] rounded-[30px] p-[2px] hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer bg-[#FFFDF9]"
                style={{
                  boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                              22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                              13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                              6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                              1px 7px 15px 0px rgba(23, 23, 23, 0.05)`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#171717"
                  className="w-8 h-8"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTech;