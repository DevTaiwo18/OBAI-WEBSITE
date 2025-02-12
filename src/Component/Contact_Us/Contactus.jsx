import React, { useState } from 'react';
import { Loader2 } from "lucide-react";

const Contactus = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full min-h-screen px-4 md:px-16 py-8">
      {/* Tilted text before the title */}
      <div className="text-center">
        <p className="text-sm text-[#FF5F1E] mb-2 uppercase">have questions?</p>
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl font-extrabold text-[#171717] mb-8">Contact Us</h1>
      
      {/* Full-width container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative w-full h-[800px] bg-gray-50 rounded-lg">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
              <Loader2 className="w-8 h-8 animate-spin text-[#FF5F1E]" />
            </div>
          )}
          <iframe
            src="https://calendly.com/team-obai/intro-conversation"
            title="OBAI Calendly Scheduling"
            className={`w-full h-full border-0 rounded-lg transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;