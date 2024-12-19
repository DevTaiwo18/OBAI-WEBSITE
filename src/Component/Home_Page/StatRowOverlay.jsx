import React from "react";

const StatRowOverlay = () => {
  return (
    <div className="hidden md:flex justify-center items-center absolute top-[60%] transform -translate-y-[60%] left-0 w-full z-20">
      <div className="flex justify-between items-center bg-white rounded-[20px] shadow-md w-[85%] py-4 px-6 max-w-[1000px] border border-[#E0E0E0]">
        {/* First Stat */}
        <div className="flex flex-col items-center text-center space-y-2 flex-1">
          <h2 className="text-[20px] font-extrabold text-[#171717]">
            98<span className="text-[#171717]">%</span>
            <span className="text-[#FF5F1E] text-[20px]"> +</span>
          </h2>
          <p className="text-[#171717] font-medium text-[10px] md:text-[11px] leading-[1.4]">
            of claims completed without having to leave the office
          </p>
        </div>

        {/* Second Stat */}
        <div className="flex flex-col items-center text-center space-y-2 flex-1">
          <h2 className="text-[20px] font-extrabold text-[#171717]">
            95<span className="text-[#171717]">%</span>
            <span className="text-[#FF5F1E] text-[20px]"> +</span>
          </h2>
          <p className="text-[#171717] font-medium text-[10px] md:text-[11px] leading-[1.4]">
            user satisfaction during the photo inspection process
          </p>
        </div>

        {/* Third Stat */}
        <div className="flex flex-col items-center text-center space-y-2 flex-1">
          <h2 className="text-[20px] font-extrabold text-[#171717]">
            50<span className="text-[#171717]">%</span>
            <span className="text-[#FF5F1E] text-[20px]"> +</span>
          </h2>
          <p className="text-[#171717] font-medium text-[10px] md:text-[11px] leading-[1.4]">
            claim cost reduction
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatRowOverlay;
