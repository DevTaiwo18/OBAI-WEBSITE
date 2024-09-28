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
          <h3 className="text-[#171717] font-bold text-xl mb-2 mt-8">Create and file the claim</h3> {/* Updated to brand black */}
          <p className="text-[#606060]">
            The adjuster initiates the claim by entering the incident details and recovery insurance information into the app’s admin interface.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-[30px] shadow-lg relative">
          <div className="absolute -top-6 left-4 md:left-10 flex items-center">
            <div className="w-10 h-10 bg-[#FF471E] text-white flex items-center justify-center rounded-full text-lg font-bold"> {/* Updated to brand orange */}
              2
            </div>
          </div>
          <h3 className="text-[#171717] font-bold text-xl mb-2 mt-8">Claim gets sent to the customer</h3> {/* Updated to brand black */}
          <p className="text-[#606060]">
            The customer reviews the claim and uploads photos/videos of their vehicle, providing additional information.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-[30px] shadow-lg relative">
          <div className="absolute -top-6 left-4 md:left-10 flex items-center">
            <div className="w-10 h-10 bg-[#FF471E] text-white flex items-center justify-center rounded-full text-lg font-bold"> {/* Updated to brand orange */}
              3
            </div>
          </div>
          <h3 className="text-[#171717] font-bold text-xl mb-2 mt-8">Receive the claim with an estimate</h3> {/* Updated to brand black */}
          <p className="text-[#606060]">
            Once the customer submits the claim, it is reviewed, and an accurate damage estimate is generated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Easy;
