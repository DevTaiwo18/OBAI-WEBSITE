import React from 'react';

// Import images
import eco1 from '../../assets/eco1.webp';
import eco3 from '../../assets/eco3.webp';
import eco4 from '../../assets/eco4.webp';
import eco5 from '../../assets/eco5.webp';

const logos = [
  { src: eco1, alt: "Main St" },
  { src: eco3, alt: "Render Capital" },
  { src: eco4, alt: "Cintrifuse" },
  { src: eco5, alt: "1000 Sun" },
];

function Ecosystem() {
  return (
    <div className="bg-[#171717] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Title on the right for large screens */} 
        <div className="lg:w-1/3 mb-12 lg:mb-0 text-center lg:text-center lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Ecosystem</h2>
        </div>

        {/* Static grid of logos */} 
        <div className="grid grid-cols-1 gap-6 md:w-1/2 md:order-1 lg:grid-cols-2 sm:grid-cols-1">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] shadow-custom p-4 flex items-center justify-center h-28"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
