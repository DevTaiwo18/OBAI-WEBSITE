import { ArrowRight } from 'lucide-react';
import JustBecauseYourTechPhoto from "../../../assets/articles/Just_because_your_tech_can_do_something.png";

const JustBecauseYourTech = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-gray-50">
      {/* Title Section */}
      <div className="text-left md:text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#171717]">
          Simple vs. Advanced Solutions – What Do You Actually Need?
        </h1>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Discover why simple solutions outperform complex systems in speed, ease, and cost-efficiency. Streamline your process today!
        </p>
      </div>

      {/* Navigation Buttons */}
      <ul className="flex flex-wrap justify-start md:justify-center gap-4 md:gap-8 mb-10">
        <li>
          <button
            onClick={() => scrollToSection('keeping-it-simple')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            The Case for Keeping It Simple
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('why-simplicity')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            Why Simplicity Wins
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('whats-right')}
            className="text-gray-800 font-medium hover:text-[#FF5F1E] transition-colors text-sm sm:text-base"
          >
            What&apos;s Right for You?
          </button>
        </li>
      </ul>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <img
          src={JustBecauseYourTechPhoto}
          alt="Just Because Your Tech Photo"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto space-y-16 text-gray-700 text-sm sm:text-base leading-relaxed">
        {/* Introduction */}
        <section className="text-left px-4">
          <p>
            In today&apos;s fast-moving tech world, businesses often face a choice: go for the most advanced solutions or stick to something simpler. But here&apos;s the reality—just because something is more complex doesn&apos;t mean it&apos;s better. In fact, when it comes to automotive insurance, especially handling hail claims, simple solutions can often be the smarter choice.
          </p>
          <p className="mt-4">
            At Obai, we&apos;re big believers in simplicity. Our hail claims app isn&apos;t overloaded with unnecessary features—it&apos;s designed to do one thing really well: make the claims process easier for appraisers and insurance companies. Let&apos;s dive into why simple solutions, like ours, are often the best fit.
          </p>
        </section>

        {/* Sections */}
        <section id="keeping-it-simple" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            The Case for Keeping It Simple
          </h2>
          <p>
            Advanced tech can be tempting. Many apps and platforms are packed with cutting-edge features like AI, predictive analytics, or even augmented reality. But while these sound impressive, they often come with drawbacks—complexity, long onboarding times, and a steeper learning curve.
          </p>
          <p className="mt-4">
            Imagine you&apos;re an appraiser handling a hail damage claim. Do you really need a dozen extra features that complicate your workflow? More likely, you need a solution that lets you get the job done fast and accurately. That&apos;s where simple solutions shine.
          </p>
        </section>

        <section id="why-simplicity" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            Why Simplicity Wins
          </h2>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><span className="font-semibold">Ease of Use:</span> It&apos;s straightforward. No endless training required—just log in and start working.</li>
            <li><span className="font-semibold">Faster Results:</span> Simplicity means efficiency. You can process hail damage claims faster.</li>
            <li><span className="font-semibold">Cost Savings:</span> No over-engineered features means fewer costs, both in time and resources.</li>
          </ul>
        </section>

        <section id="whats-right" className="text-left px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#FF5F1E]">
            What&apos;s Right for You?
          </h2>
          <p>
            When it comes to hail claims, do you need the most advanced solution out there? Probably not. What you really need is something that works—fast, accurately, and with minimal hassle. That&apos;s what Obai&apos;s app is built for.
          </p>
          <p className="mt-4">
            In a world of advanced solutions, sometimes the simplest answer is the best one. Ready to streamline your hail claims process? Try Obai today and experience the power of simplicity firsthand.
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

export default JustBecauseYourTech;
