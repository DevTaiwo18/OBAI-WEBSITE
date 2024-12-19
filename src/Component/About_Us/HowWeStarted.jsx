import imagebanner from '../../assets/image-banner.png'; // Ensure this is the correct path to the image
const HowWeStarted = () => {
  return (
    <div className="py-10 md:py-16 px-4 md:px-20">

      {/* Mission Statement Section */}
      <div className="mission-background mt-12 bg-[#F0F4FF] py-8 px-4 rounded-lg" style={{paddingBottom:"3rem"}}> {/* Updated to the brand light background */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#171717] text-center mb-4">Mission Statement</h1> {/* Updated to brand black */}
        <p className="text-center text-[#606060] max-w-4xl text-sm mx-auto">
          Revolutionize insurance claims with cutting-edge technology and an enhanced user experience, 
          ensuring swift, efficient, and stress-free service.
        </p>
      </div>

      {/* Container for How We Started Section */}
      <div className="how-we-started-container gap-0 md:gap-16 flex flex-col md:flex-row items-center justify-between" style={{paddingTop:"3rem"}}>
        
        {/* Text Section */}
        <div className="how-we-started md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-4">How we started</h1> {/* Updated to brand black */}
          <p className="text-[#606060]">
          Obai’s journey began a decade ago as a simple idea to bring innovation to outdated industries. 
          Kameron Seabrook, a career entrepreneur, started pitching at competitions and learning the ins and outs of operating a business. 

            <br /><br />
            Together, they began laying the groundwork for Obai. Justin leveraged his ability to connect with people and gained early customers, while Kameron focused on developing the technology and refining the business model. 
            The journey wasn’t without challenges—it required multiple pivots and relentless determination.

            <br /><br />
            Their breakthrough moment came in Denver, Colorado, after a major hailstorm. Within a few days, Obai processed hundreds of insurance claims, proving the potential of their innovative platform. From there, the company’s trajectory was set, paving the way for a new era in insurance claims processing. The rest is history.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="image-banner md:w-1/2 flex justify-center">
          <img
            src={imagebanner}
            alt="Kameron"
            className="rounded-lg w-full h-auto object-cover"
            width={750}
            height={593}
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeStarted;
