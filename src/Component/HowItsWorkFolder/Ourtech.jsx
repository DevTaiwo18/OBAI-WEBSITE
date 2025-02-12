import React, { useState } from "react";
import { Loader2 } from "lucide-react";

const OurTech = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <div className="about py-5 md:py-12 px-4 md:px-8 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h3 className="text-lg text-brand-primary">How it works</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#171717]">
            Our Tech
          </h1>
        </div>

        {/* Video Section */}
        <div className="tech-video relative flex justify-center">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-100">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <Loader2 className="w-8 h-8 animate-spin text-[#FF5F1E]" />
              </div>
            )}
            <iframe
              className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              src="https://www.youtube.com/embed/kEEntADRVlE"
              title="Our Tech Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTech;