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
          CapacitorJS: A Leaner Hail Claims Process
        </h1>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto sm:mx-0 md:mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Discover why Obai chose CapacitorJS to build a lean web app for faster, simpler hail claims processing. Learn how simplicity improves efficiency for appraisers and insurers.
        </p>
      </div>

      {/* Navigation Buttons */}
      <ul className="flex flex-wrap justify-start ps-3 md:ps-0 md:justify-center gap-4 md:gap-8 mb-10">
        <li>
          <button
            onClick={() => scrollToSection('native-app-drawbacks')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Native App Drawbacks
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('capacitorjs-benefits')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            CapacitorJS Benefits
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('simplicity-efficiency')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Simplicity = Efficiency
          </button>
        </li>
      </ul>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto space-y-16 text-gray-700 text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section id="native-app-drawbacks" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Why Native Apps Aren&apos;t Always the Best Option
          </h2>
          <p>
            Native apps can be overcomplicated, requiring separate codebases for iOS and Android, frequent updates, and constant maintenance. This complexity can slow down workflows in industries like automotive insurance, where simplicity is key.
          </p>
        </section>

        {/* Section 2 */}
        <section id="capacitorjs-benefits" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Our Solution: A Lean Web App Built with CapacitorJS
          </h2>
          <p>
            CapacitorJS allows us to create a web app that offers a native-like experience while being easier to maintain. With a single codebase, development is faster and updates are seamless. Appraisers benefit from features like AR annotations and AI-powered photo validation, enhancing their workflow efficiency.
          </p>
        </section>

        {/* Section 3 */}
        <section id="simplicity-efficiency" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Simplicity Equals Efficiency
          </h2>
          <p>
            By choosing simplicity, we ensure our users have the tools they need without unnecessary bloat. With automatic updates, appraisers always have access to the most current features, allowing them to process claims quickly and efficiently.
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <a
          href="/contact"
          className="group flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg bg-[#FFFDF9] hover:bg-gray-100 transition-colors shadow-md"
        >
          <div className="text-left text-sm sm:text-base">
            <h3 className="text-lg sm:text-xl font-semibold text-[#171717] mb-1">
              Let&apos;s Talk
            </h3>
            <p className="text-gray-600">
              Learn how Obai can help you streamline your hail claims process with simple, effective tools.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5F1E] group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default InnovativeSolutions;
