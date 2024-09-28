import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-20">
      <div className="text-center mb-6">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-[#171717] mb-4">Stay in the loop</h1>
      </div>

      {/* Email Input and Subscribe Button */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="w-full py-3 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <button
          className="w-full md:w-auto bg-gradient-to-b from-[#FF5F1E] to-[#FF471E] text-[#FFFDF9] font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-custom"
          style={{
            boxShadow: '0px 9px 20px rgba(255, 95, 30, 0.3)', // Custom shadow based on the brand style
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
