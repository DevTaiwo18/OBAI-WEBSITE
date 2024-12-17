import { ArrowRight } from 'lucide-react';

const CustomerCentricApproach = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-gray-50">
      {/* Title Section */}
      <div className="text-left ps-3 md:ps-0  sm:text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] mb-4">
          Customer-Centric Approach
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
          Prioritize your customers' needs through innovation and strategies that foster growth,
          efficiency, and exceptional experiences.
        </p>
      </div>

      {/* Navigation Buttons */}
      <ul className="flex flex-wrap ps-3 md:ps-0  justify-start sm:justify-center gap-4 mb-10">
        <li>
          <button
            onClick={() => scrollToSection('emerging-tech')}
            className="text-gray-800 text-sm sm:text-base font-medium hover:text-[#FF5F1E] transition-colors"
          >
            Emerging Technologies
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('digital-transformation')}
            className="text-gray-800 text-sm sm:text-base font-medium hover:text-[#FF5F1E] transition-colors"
          >
            Digital Transformation
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('sustainability')}
            className="text-gray-800 text-sm sm:text-base font-medium hover:text-[#FF5F1E] transition-colors"
          >
            Sustainability
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('future-work')}
            className="text-gray-800 text-sm sm:text-base font-medium hover:text-[#FF5F1E] transition-colors"
          >
            Future of Work
          </button>
        </li>
      </ul>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto space-y-16 text-gray-700 text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section id="emerging-tech" className="text-left px-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#FF5F1E]">Emerging Technologies</h2>
          <p>
            From Artificial Intelligence to IoT, emerging technologies empower organizations to innovate,
            increase efficiency, and enhance decision-making processes.
          </p>
        </section>

        {/* Section 2 */}
        <section id="digital-transformation" className="text-left px-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#FF5F1E]">Digital Transformation</h2>
          <p>
            Businesses are adopting cloud-native architectures, process automation, and data-driven
            strategies to transform operations and customer experiences.
          </p>
        </section>

        {/* Section 3 */}
        <section id="sustainability" className="text-left px-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#FF5F1E]">Sustainability</h2>
          <p>
            Green technologies and circular economy practices are driving organizations toward
            environmentally responsible and sustainable success.
          </p>
        </section>

        {/* Section 4 */}
        <section id="future-work" className="text-left px-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#FF5F1E]">Future of Work</h2>
          <p>
            The workplace is evolving with tools that enhance collaboration, flexibility, and employee
            well-being while promoting continuous learning and development.
          </p>
        </section>
      </div>

      {/* Call-to-Action */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <a
          href="/articles/streamlined-processes"
          className="group flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-md"
        >
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-[#171717] mb-1">
              Streamlined Processes
            </h3>
            <p className="text-gray-600">
              Learn about strategies to improve efficiency and achieve measurable growth through process
              optimization.
            </p>
          </div>
          <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF5F1E] group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default CustomerCentricApproach;
