import React from 'react';

const StatRow = () => {
  return (
    <div className="flex justify-center items-center mt-6 w-full">
      <div className="rounded-xl p-6 bg-white shadow-[0px_9px_20px_rgba(225,227,251,0.7)] w-full md:w-1/3 text-center">
        
        {/* First Stat */}
        <div className="py-2">
          <h2 className="text-[32px] font-extrabold text-[#171717]">
            98<span className="text-[#171717]">%</span><span className="text-[#FF5F1E] text-[32px]"> +</span>
          </h2>
          <p className="text-[#171717] font-semibold text-[12px] md:text-sm mt-2">
            of claims completed without having to leave the office
          </p>
        </div>

        {/* Second Stat */}
        <div className="py-2">
          <h2 className="text-[32px] font-extrabold text-[#171717]">
            95<span className="text-[#171717]">%</span><span className="text-[#FF5F1E] text-[32px]"> +</span>
          </h2>
          <p className="text-[#171717] font-semibold text-[12px] md:text-sm mt-2">
            user satisfaction during the photo inspection process
          </p>
        </div>

        {/* Third Stat */}
        <div className="py-2">
          <h2 className="text-[32px] font-extrabold text-[#171717]">
            90<span className="text-[#171717]">%</span><span className="text-[#FF5F1E] text-[32px]"> +</span>
          </h2>
          <p className="text-[#171717] font-semibold text-[12px] md:text-sm mt-2">
            hail damage repair estimate accuracy
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatRow;
