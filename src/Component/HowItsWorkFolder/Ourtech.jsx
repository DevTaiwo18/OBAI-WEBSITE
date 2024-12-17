import React from "react";

const OurTech = () => {
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
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            {/* YouTube Embedded Video */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/L5XXyGuI7Do"
              title="Obai Commercial Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTech;
