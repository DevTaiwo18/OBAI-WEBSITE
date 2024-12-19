import React, { useState, useEffect } from "react";
// Import images
import eco1 from "../../assets/eco1.webp";
import eco2 from "../../assets/eco2.webp";
import eco3 from "../../assets/eco3.webp";
import eco4 from "../../assets/eco4.webp";
import eco5 from "../../assets/eco5.webp";

// Initial logos
const initialLogosLeft = [
  { src: eco2, alt: "IAS" },
  { src: eco1, alt: "Main St" },
  { src: eco3, alt: "Render Capital" },
];

const initialLogosRight = [
  { src: eco4, alt: "Cintrifuse" },
  { src: eco5, alt: "1000 Sun" },
  { src: eco2, alt: "IAS" },
];

function Ecosystem() {
  const [logosLeft, setLogosLeft] = useState(initialLogosLeft);
  const [logosRight, setLogosRight] = useState(initialLogosRight);

  // Function to duplicate logos endlessly for seamless scrolling
  useEffect(() => {
    const intervalLeft = setInterval(() => {
      setLogosLeft((prev) => {
        const [first, ...rest] = prev; // Move the first item to the end
        return [...rest, first];
      });
    }, 3000); // Adjust timing for smooth motion

    const intervalRight = setInterval(() => {
      setLogosRight((prev) => {
        const [last, ...rest] = prev.reverse(); // Move the last item to the start
        return [last, ...rest].reverse();
      });
    }, 3000); // Adjust timing for smooth motion

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
    };
  }, []);

  return (
    <div className="bg-[#171717] py-8 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Title */}
        <div className="lg:w-2/3 mb-6 lg:mb-0 text-center lg:text-center lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Ecosystem</h2>
        </div>

        {/* Animated rows */}
        <div className="relative flex gap-4 w-full overflow-hidden">
          {/* Left row (Top to Bottom) */}
          <div className="flex flex-col gap-4">
            {logosLeft.slice(0, 3).map((logo, index) => (
              <div
                key={`left-${index}`}
                className="bg-white rounded-[20px] shadow-lg p-4 flex items-center justify-center w-40 h-28 sm:w-60 sm:h-28"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right row (Bottom to Top) */}
          <div className="flex flex-col gap-4">
            {logosRight.slice(0, 3).map((logo, index) => (
              <div
                key={`right-${index}`}
                className="bg-white rounded-[20px] shadow-lg p-4 flex items-center justify-center w-40 h-28 sm:w-60 sm:h-28"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
