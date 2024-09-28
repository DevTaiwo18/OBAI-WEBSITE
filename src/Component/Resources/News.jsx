import React, { useEffect, useState } from 'react';
import BG from "./../../assets/Rectangle 38.png"; // Correctly import the background image

const News = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Preload the image to prevent delay on render
  useEffect(() => {
    const img = new Image();
    img.src = BG;
    img.onload = () => setIsImageLoaded(true); // Set image loaded state to true once it's loaded
  }, []);

  const newsData = [
    { title: 'OBAI Launches New AI-Powered RepairBot' },
    { title: 'How to Speed Up Your Insurance Claims with Our App' },
    { title: 'Streamlining the Claims Process for a Better User Experience' },
    { title: 'New Features in OBAI to Help Adjusters' },
    { title: 'Tips for Reducing Insurance Processing Time' },
    { title: 'Understanding AI in the Insurance Industry' },
    { title: 'OBAI Expands Into New Markets Across the U.S.' },
    { title: 'The Future of Insurance Technology in 2024' },
    { title: 'Case Study: How OBAI Improved Claim Accuracy' },
    { title: 'OBAI Recognized as Top Innovator in InsurTech' },
    { title: 'What You Need to Know About Digital Insurance' },
    { title: 'Enhancing Customer Satisfaction Through Technology' },
  ];

  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-20">
      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="relative rounded-[30px] overflow-hidden shadow-lg h-60 sm:h-64 md:h-72 lg:h-80"
            style={{
              boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                          22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                          13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                          6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                          1px 7px 15px 0px rgba(23, 23, 23, 0.05)`,
              backgroundColor: isImageLoaded ? 'transparent' : '#f0f0f0', // Fallback background color
            }}
          >
            {/* Apply background image to each card using the imported BG variable */}
            {isImageLoaded && (
              <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${BG})` }}
              ></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent h-full" style={{ width: '65%' }}></div>
            <div className="relative h-full flex items-center">
              <h3 className="text-white text-lg font-bold leading-tight p-6 w-1/2">
                {news.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
