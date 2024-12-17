import { ArrowRight } from 'lucide-react';

const StreamlinedProcesses = () => {
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
          CapacitorJS: Why We Chose a Web App for a Leaner Hail Claims Process
        </h1>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto sm:mx-0 md:mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Discover why Obai chose CapacitorJS to build a lean web app for faster, simpler hail claims
          processing. Learn how simplicity improves efficiency for appraisers and insurers.
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
            Native apps can be overcomplicated. With different codebases for iOS and Android, the need
            for constant updates, and the hassle of keeping everything running smoothly, native apps
            can create more problems than they solve. In the world of automotive insurance, where
            appraisers need tools that just work, this complexity can slow things down.
          </p>
        </section>

        {/* Section 2 */}
        <section id="capacitorjs-benefits" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Our Solution: A Lean Web App Built with CapacitorJS
          </h2>
          <p>
            With CapacitorJS, we found a way to offer the best of both worlds. Our web app delivers a
            seamless experience, behaving like a native app while being easier to maintain and update.
            It uses a single codebase, making development quicker and more efficient, and because it
            runs directly in the browser, there&apos;s no need to worry about downloads or compatibility
            issues.
          </p>
          <p>
            For appraisers, this means a faster, more efficient workflow. Features like AR annotations
            and AI-powered photo validation work seamlessly, allowing appraisers to focus on what
            matters—assessing damage and processing claims quickly.
          </p>
        </section>

        {/* Section 3 */}
        <section id="simplicity-efficiency" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Simplicity Equals Efficiency
          </h2>
          <p>
            By choosing a simple web app, we ensure that our users get a tool that helps them do their
            jobs better. No bloat, no unnecessary features—just the essentials. And because updates
            happen automatically, our users always have the most current tools at their fingertips.
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
              Let’s Talk
            </h3>
            <p className="text-gray-600">
              If you&apos;re looking for a streamlined solution to make your hail claims process more
              efficient, we&apos;d love to talk. Contact us today to learn how Obai can help you save time
              and money with simple, effective tools.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5F1E] group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default StreamlinedProcesses;
