import React from "react";

const StatRow = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-6 mt-6 md:mt-8">
      {/* First Stat */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h2 className="text-[32px] font-extrabold text-[#171717]">
          98<span className="text-[#171717]">%</span>
          <span className="text-[#FF5F1E] text-[32px]"> +</span>
        </h2>
        <p className="text-[#171717] font-semibold text-[12px] md:text-sm">
          of claims completed without having to leave the office
        </p>
      </div>

      {/* Second Stat */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h2 className="text-[32px] font-extrabold text-[#171717]">
          95<span className="text-[#171717]">%</span>
          <span className="text-[#FF5F1E] text-[32px]"> +</span>
        </h2>
        <p className="text-[#171717] font-semibold text-[12px] md:text-sm">
          user satisfaction during the photo inspection process
        </p>
      </div>

      {/* Third Stat */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h2 className="text-[32px] font-extrabold text-[#171717]">
          50<span className="text-[#171717]">%</span>
          <span className="text-[#FF5F1E] text-[32px]"> +</span>
        </h2>
        <p className="text-[#171717] font-semibold text-[12px] md:text-sm">
          claim cost reduction
        </p>
      </div>
    </div>
  );
};

export default StatRow;
