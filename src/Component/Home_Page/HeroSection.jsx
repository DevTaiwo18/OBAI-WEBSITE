import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-100 py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Content Container */}
        <div className="text-center space-y-8">
          {/* Ready Set Claim text */}
          <div className="inline-block">
            <p className="text-sm text-gray-600 font-black tracking-wide border border-gray-200 rounded-[50px] px-4 py-1 bg-white shadow-sm">
              Ready. Set. Claim
            </p>
          </div>
          
          {/* Main heading */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              We Don't Wait—We Act.
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Your Claim, Our Mission.
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold">
            At Obai, we're rewriting the rules of insurance. Our cutting-edge AI delivers precise scopes,
            crushing inefficiency so you can focus on what truly matters.
            <span className="block mt-2">The people you serve.</span>
          </p>

          {/* Learn More button with full rounded corners */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;