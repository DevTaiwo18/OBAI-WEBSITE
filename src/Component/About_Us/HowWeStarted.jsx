import imagebanner from '../../assets/image-banner.png'; // Ensure this is the correct path to the image
const HowWeStarted = () => {
  return (
    <div className="py-10 md:py-16 px-4 md:px-20">

      {/* Mission Statement Section */}
      <div className="mission-background mt-12 bg-[#F0F4FF] py-8 px-4 rounded-lg" style={{ paddingBottom: "3rem" }}> {/* Updated to the brand light background */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#171717] text-center mb-4">Mission Statement</h1> {/* Updated to brand black */}
        <p className="text-center text-[#606060] max-w-4xl text-sm mx-auto">
          We believe everyone deserves fast and transparent recovery resources when disaster strikes. Our mission is to simplify and accelerate the damage capture process.
        </p>
      </div>

      {/* Container for How We Started Section */}
      <div className="how-we-started-container gap-0 md:gap-16 flex flex-col md:flex-row items-center justify-between" style={{ paddingTop: "3rem" }}>

        {/* Text Section */}
        <div className="how-we-started md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-4">How we started</h1> {/* Updated to brand black */}
          <p className="text-[#606060] text-sm">
            Obai’s journey began five years ago as a simple idea to bring much-needed innovation to aging, inefficient industries. Kameron Seabrook, a career entrepreneur, spent countless hours refining his pitch at competitions and learning the complex realities of running a successful venture. Every challenge sharpened his vision and deepened his resolve.
            Before long, Kameron teamed up with Justin Fields, whose seasoned relationship-building and customer engagement background proved indispensable. With years of personal entrepreneurial experience, Justin knew how to navigate conversations with prospective clients and showcase a product’s true value. He deftly secured Obai’s first wave of customers, drawing on his network and an innate ability to connect with people from all walks of life.

            <br /><br />
            Meanwhile, Kameron channeled his passion for technology and streamlined the platform’s capabilities, ensuring Obai could scale to meet rapidly growing demand. In these formative years, the duo weathered multiple pivots and moments of uncertainty, bolstered by unwavering determination and a shared belief in Obai’s transformative potential.
            Their breakthrough emerged in Denver, Colorado, following a destructive hailstorm. Within days, Obai seamlessly processed hundreds of insurance claims, validating the platform’s innovative approach and demonstrating how it could reshape the industry. From that pivotal success, the team knew they were on the cusp of changing how claims were handled—ushering in a new era of efficiency and transparency.

            <br /><br />
            Since then, Obai’s story has been one of exponential growth, but it all traces back to the synergy between Kameron’s entrepreneurial foresight and Justin’s proven expertise in forging genuine human connections. The rest, as they say, is history.
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
