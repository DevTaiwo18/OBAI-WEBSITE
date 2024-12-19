import eco1 from "../../assets/eco1.webp";
import eco2 from "../../assets/eco2.webp";
import eco3 from "../../assets/eco3.webp";
import eco4 from "../../assets/eco4.webp";
import eco5 from "../../assets/eco5.webp";

// Initial logos
const logosLeft = [
  { src: eco2, alt: "IAS", exLink: "https://iasclaimsgroup.com/" },
  { src: eco1, alt: "Main St", exLink: "https://www.mainstventures.org/" },
  { src: eco3, alt: "Render Capital", exLink: "https://www.render.capital/" },
];

const logosRight = [
  { src: eco4, alt: "Cintrifuse", exLink: "https://cintrifuse.com/" },
  {
    src: eco5,
    alt: "1000 Sun",
    exLink: "https://www.linkedin.com/company/1000sun/posts/?feedView=all",
  },
  { src: eco2, alt: "IAS", exLink: "https://iasclaimsgroup.com/" },
];

function Ecosystem() {
  return (
    <div className="bg-[#171717] py-8 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Title */}
        <div className="lg:w-2/3 mb-6 lg:mb-0 text-center lg:text-center lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Ecosystem
          </h2>
        </div>

        {/* Animated rows */}
        <div className="relative flex gap-8 w-full overflow-hidden h-80">
          {/* Left row (Top to Bottom) */}
          <div className="flex flex-col gap-6 animate-scroll-down infinite">
            {[...logosLeft, ...logosLeft].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] shadow-lg p-6 flex items-center justify-center w-40 h-30 sm:w-60 sm:h-28"
              >
                <a href={logo.exLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Right row (Bottom to Top) */}
          <div className="flex flex-col gap-8 animate-scroll-up">
            {[...logosRight, ...logosRight].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] shadow-lg p-6 flex items-center justify-center w-40 h-30 sm:w-60 sm:h-28"
              >
                <a href={logo.exLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
