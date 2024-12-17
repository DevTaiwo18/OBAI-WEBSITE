import { ArrowRight } from 'lucide-react';

const InnovativeSolutions = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <article className="flex-3 p-12 max-w-5xl">
        {/* Sidebar Navigation */}
        <h1 className="text-2xl font-extrabold mb-8 text-brand-primary">
          Innovative Solutions
        </h1>
        <ul className="flex flex-col gap-4">
          <li>
            <button 
              onClick={() => scrollToSection('emerging-tech')}
              className="text-gray-700 hover:text-[#FF5F1E] transition-colors text-left"
            >
              Emerging Technologies
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('digital-transformation')}
              className="text-gray-700 hover:text-[#FF5F1E] transition-colors text-left"
            >
              Digital Transformation
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('sustainability')}
              className="text-brand-dark hover:text-brand-primary active:text-brand-tertiary font-medium transition-colors text-left"
            >
              Sustainability
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('future-work')}
              className="text-gray-700 hover:text-[#FF5F1E] transition-colors text-left"
            >
              Future of Work
            </button>
          </li>
        </ul>
        <br/>
        <p className="text-lg leading-relaxed mb-12">
          In today&apos;s rapidly evolving business landscape, organizations must embrace innovation
          to stay competitive and meet changing customer demands. This comprehensive guide
          explores key areas where innovative solutions are reshaping the enterprise
          environment and creating new opportunities for growth.
        </p>

        <section id="emerging-tech" className="mb-16">
          <h2 className="text-2xl font-extrabold mb-8 text-brand-primary">Emerging Technologies</h2>
          <p className="text-lg leading-relaxed mb-6">
            The convergence of multiple emerging technologies is creating unprecedented
            opportunities for business transformation and innovation.
          </p>
          <ul className="list-disc ml-8 text-lg leading-relaxed">
            <li>
              <strong>Artificial Intelligence & Machine Learning:</strong> Advanced algorithms
              are automating complex tasks, providing predictive insights, and enabling
              more intelligent decision-making across organizations.
            </li>
            <li>
              <strong>Internet of Things (IoT):</strong> Connected devices and sensors are
              generating valuable data streams that enable real-time monitoring, predictive
              maintenance, and optimization of operations.
            </li>
            <li>
              <strong>Edge Computing:</strong> Processing data closer to its source reduces
              latency and enables faster response times for critical applications while
              maintaining data privacy and security.
            </li>
            <li>
              <strong>Quantum Computing:</strong> Next-generation computing capabilities
              promise to solve complex problems that are beyond the reach of traditional
              computers.
            </li>
          </ul>
        </section>

        <section id="digital-transformation" className="mb-16">
          <h2 className="text-2xl font-extrabold mb-8 text-brand-primary">Digital Transformation</h2>
          <p className="text-lg leading-relaxed mb-6">
            Digital transformation is no longer optional - it&apos;s a critical imperative for
            organizations looking to remain competitive in the modern business environment.
          </p>
          <ul className="list-disc ml-8 text-lg leading-relaxed">
            <li>
              <strong>Cloud-Native Architecture:</strong> Modern applications built for the
              cloud enable greater scalability, reliability, and faster innovation cycles.
            </li>
            <li>
              <strong>Data-Driven Decision Making:</strong> Advanced analytics and business
              intelligence tools transform raw data into actionable insights.
            </li>
            <li>
              <strong>Customer Experience:</strong> Digital channels and personalized
              interactions create seamless, engaging customer journeys across touchpoints.
            </li>
            <li>
              <strong>Process Automation:</strong> Robotic process automation and workflow
              tools eliminate manual tasks and improve operational efficiency.
            </li>
          </ul>
        </section>

        <section id="sustainability" className="mb-16">
          <h2 className="text-2xl font-extrabold mb-8 text-brand-primary">Sustainability</h2>
          <p className="text-lg leading-relaxed mb-6">
            Environmental responsibility and sustainable practices are becoming core
            business imperatives, driving innovation across industries.
          </p>
          <ul className="list-disc ml-8 text-lg leading-relaxed">
            <li>
              <strong>Green Technology:</strong> Clean energy solutions and sustainable
              technologies are reducing environmental impact while creating new
              business opportunities.
            </li>
            <li>
              <strong>Circular Economy:</strong> Innovative business models focused on
              recycling, reuse, and waste reduction are gaining traction.
            </li>
            <li>
              <strong>Carbon Management:</strong> Advanced tools and technologies help
              organizations track, report, and reduce their carbon footprint.
            </li>
            <li>
              <strong>Sustainable Supply Chains:</strong> Organizations are reimagining
              supply chains to be more environmentally friendly and socially responsible.
            </li>
          </ul>
        </section>

        <section id="future-work" className="mb-16">
          <h2 className="text-2xl font-extrabold mb-8 text-brand-primary">Future of Work</h2>
          <p className="text-lg leading-relaxed mb-6">
            The workplace is evolving rapidly, driven by technological innovation and
            changing employee expectations.
          </p>
          <ul className="list-disc ml-8 text-lg leading-relaxed">
            <li>
              <strong>Hybrid Workplaces:</strong> Advanced collaboration tools and
              flexible work arrangements are becoming the norm, enabling teams to
              work effectively from anywhere.
            </li>
            <li>
              <strong>AI-Powered Productivity:</strong> Intelligent tools and assistants
              are augmenting human capabilities and improving productivity.
            </li>
            <li>
              <strong>Skills Revolution:</strong> Continuous learning platforms and
              adaptive training programs help employees develop new capabilities.
            </li>
            <li>
              <strong>Employee Experience:</strong> Digital workplace solutions focus
              on wellbeing, engagement, and personalized employee experiences.
            </li>
          </ul>
        </section>

        {/* Next Article Link - Updated Alignment */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <a href="/articles/customer-centric-approach" className="group flex items-center gap-8 p-6 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">Customer Centric Approach</h3>
              <p className="text-gray-500">Learn about building and implementing effective digital transformation strategies.</p>
            </div>
            <ArrowRight className="w-6 h-6 text-[#FF5F1E] transform group-hover:translate-x-2 transition-transform flex-shrink-0" />
          </a>
        </div>
      </article>
    </div>
  );
};

export default InnovativeSolutions;
