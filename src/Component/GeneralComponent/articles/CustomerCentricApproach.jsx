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
      <div className="text-left ps-3 md:ps-0 sm:text-left md:text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#171717]">
          If Your Users Won&apos;t Use It, Then Why Add It?
        </h1>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto sm:mx-0 md:mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Discover why simplicity matters in hail claims apps. Learn how Obai&apos;s streamlined solution
          boosts efficiency for appraisers and insurance companies.
        </p>
      </div>

      {/* Navigation Buttons */}
      <ul className="flex flex-wrap justify-start ps-3 md:ps-0 md:justify-center gap-4 md:gap-8 mb-10">
        <li>
          <button
            onClick={() => scrollToSection('simplicity-efficiency')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Simplicity Leads to Efficiency
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('why-overcomplicate')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Why Overcomplicate?
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('the-obai-way')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            The Obai Way
          </button>
        </li>
      </ul>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto space-y-16 text-gray-700 text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section id="simplicity-efficiency" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Simplicity Leads to Efficiency
          </h2>
          <p>
            Let’s be honest—no one has time to figure out a complex app when they’re out assessing
            hail damage or reviewing claims. Every unnecessary step or feature is wasted time. Obai
            understands this, which is why we prioritize simplicity. We build our app with one thing
            in mind: getting appraisers and insurance companies through the process as quickly and
            efficiently as possible.
          </p>
        </section>

        {/* Section 2 */}
        <section id="why-overcomplicate" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Why Overcomplicate?
          </h2>
          <p>
            Imagine an app filled with features that are rarely used. It’s confusing, frustrating, and
            slows down the claims process. More advanced doesn’t mean more effective. In fact, it
            usually means more things to manage, more chances for error, and more maintenance.
          </p>
          <p>
            At Obai, we know that simplicity is key. Our app focuses on core features like real-time
            photo validation—things our users actually need to do their jobs faster. No extra fluff,
            just solutions that work.
          </p>
        </section>

        {/* Section 3 */}
        <section id="the-obai-way" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            The Obai Way: Simple, Effective Solutions
          </h2>
          <p>
            We built our hail claims app to streamline the process. Each feature is designed with a
            clear purpose: to help appraisers and insurance companies manage claims more efficiently.
            We keep things simple because we know that&apos;s what works.
          </p>
          <p>
            Next time you&apos;re thinking of adding a new feature, ask yourself: &quot;Will my users actually
            use this?&quot; If not, it&apos;s probably not worth adding. Build what&apos;s necessary, and keep it
            simple.
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
              Ready to simplify your claims process?
            </h3>
            <p className="text-gray-600">
              Contact Obai today to learn how our streamlined hail claims app can help your team work
              faster, smarter, and more efficiently.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5F1E] group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default CustomerCentricApproach;
