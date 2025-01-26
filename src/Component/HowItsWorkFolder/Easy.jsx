import React from 'react';

const Easy = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-20">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#171717]">It's that easy</h1> {/* Brand black for title */}
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-[30px] shadow-lg relative"> {/* Updated to standard border radius */}
          <div className="absolute -top-6 left-4 md:left-10 flex items-center">
            <div className="w-10 h-10 bg-[#FF471E] text-white flex items-center justify-center rounded-full text-lg font-bold"> {/* Updated to brand orange */}
              1
            </div>
          </div>
          <h3 className="text-[#171717] font-bold text-xl mb-2 mt-8">Upload the claim</h3> {/* Updated to brand black */}
          <p className="text-[#606060]">
            The adjuster initiates the process by uploading the claim details (insurance information, incident details, policyholder and vehicle information) manually or via our file reader, along with options and customized instructions for customers.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-[30px] shadow-lg relative">
          <div className="absolute -top-6 left-4 md:left-10 flex items-center">
            <div className="w-10 h-10 bg-[#FF471E] text-white flex items-center justify-center rounded-full text-lg font-bold"> {/* Updated to brand orange */}
              2
            </div>
          </div>
          <h3 className="text-[#171717] font-bold text-xl mb-2 mt-8">Customer collects damage</h3> {/* Updated to brand black */}
          <p className="text-[#606060]">
          The customer receives a customized link that guides them through detailed, step-by-step instructions for preparing image/video evidence of vehicle damage. The process also includes repair shop selection, along with additional details and notes tailored for the adjuster.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-[30px] shadow-lg relative">
          <div className="absolute -top-6 left-4 md:left-10 flex items-center">
            <div className="w-10 h-10 bg-[#FF471E] text-white flex items-center justify-center rounded-full text-lg font-bold"> {/* Updated to brand orange */}
              3
            </div>
          </div>
          <h3 className="text-[#171717] font-bold text-xl mb-2 mt-8">Precise scope returned</h3> {/* Updated to brand black */}
          <p className="text-[#606060]">
          All multimedia and metadata goes through our damage estimator model which assesses dent sizing and depth in various lighting conditions and capture environments. The total package is then returned to the adjuster for review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Easy;
