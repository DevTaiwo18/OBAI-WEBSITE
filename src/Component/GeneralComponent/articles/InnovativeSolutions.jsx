import { ArrowRight } from 'lucide-react';

const InnovativeSolutions = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-gray-50">
      {/* Title Section */}
      <div className="text-left ps-3 md:ps-0 sm:text-left md:text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#171717]">
          Innovative Solutions
        </h1>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto sm:mx-0 md:mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Explore the groundbreaking solutions that are shaping industries, driving sustainable growth,
          and redefining the future of business.
        </p>
      </div>

      {/* Navigation Buttons */}
      <ul className="flex flex-wrap justify-start ps-3 md:ps-0 md:justify-center gap-4 md:gap-8 mb-10">
        <li>
          <button
            onClick={() => scrollToSection('emerging-tech')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Emerging Technologies
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('digital-transformation')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Digital Transformation
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('sustainability')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Sustainability
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('future-work')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Future of Work
          </button>
        </li>
      </ul>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto space-y-16 text-gray-700 text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section id="emerging-tech" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Emerging Technologies
          </h2>
          <p>
            From Artificial Intelligence to IoT, emerging technologies are empowering organizations to
            achieve unprecedented innovation, efficiency, and agility in their operations.
          </p>
        </section>

        {/* Section 2 */}
        <section id="digital-transformation" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Digital Transformation
          </h2>
          <p>
            Businesses are leveraging cloud-native architectures, process automation, and data-driven
            decision-making to transform customer experiences and drive growth.
          </p>
        </section>

        {/* Section 3 */}
        <section id="sustainability" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Sustainability
          </h2>
          <p>
            Sustainable innovations, such as green technology and circular economies, are enabling
            businesses to minimize their environmental impact while fostering long-term success.
          </p>
        </section>

        {/* Section 4 */}
        <section id="future-work" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Future of Work
          </h2>
          <p>
            The workplace of tomorrow prioritizes collaboration, flexibility, and continuous learning,
            powered by intelligent tools and a focus on employee well-being.
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <a
          href="/articles/customer-centric-approach"
          className="group flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg bg-[#FFFDF9] hover:bg-gray-100 transition-colors shadow-md"
        >
          <div className="text-left text-sm sm:text-base">
            <h3 className="text-lg sm:text-xl font-semibold text-[#171717] mb-1">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-600">
              Discover strategies to prioritize customer needs and deliver exceptional digital
              experiences.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5F1E] group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default InnovativeSolutions;
