import React from 'react';

const Contactus = () => {
  return (
    <div className="w-full px-4 md:px-16 py-8 mt-5">
      {/* Tilted text before the title */}
      <div className="text-center">
        <p className="text-sm text-[#FF5F1E] mb-2 uppercase">have questions?</p>
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl font-extrabold text-[#171717] mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="w-full md:w-1/2 h-[80vh]">
          <iframe
            src="https://calendly.com/team-obai/30min"
            title="OBAI Calendly Scheduling"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
