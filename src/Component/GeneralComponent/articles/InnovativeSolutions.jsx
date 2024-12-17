import { ArrowRight } from 'lucide-react';

const InnovativeSolutions = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center">
    <article className="flex flex-col p-6 max-w-5xl">
      <h1 className="text-2xl font-extrabold mb-6 text-brand-primary">Innovative Solutions</h1>
      
      <ul className="flex flex-col gap-4">
        <li>
          <button onClick={() => scrollToSection('emerging-tech')} className="text-gray-700 hover:text-[#FF5F1E] transition-colors text-left">
            Emerging Technologies
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('digital-transformation')} className="text-gray-700 hover:text-[#FF5F1E] transition-colors text-left">
            Digital Transformation
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('sustainability')} className="text-brand-dark hover:text-brand-primary active:text-brand-tertiary font-medium transition-colors text-left">
            Sustainability
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('future-work')} className="text-gray-700 hover:text-[#FF5F1E] transition-colors text-left">
            Future of Work
          </button>
        </li>
      </ul>

      <p className="text-lg leading-relaxed mb-8">
        In today&apos;s rapidly evolving business landscape, organizations must embrace innovation to stay competitive and meet changing customer demands.
      </p>

      {/** Sections */}
      <section id="emerging-tech" className="mb-12">
        <h2 className="text-2xl font-extrabold mb-6 text-brand-primary">Emerging Technologies</h2>
        <ul className="list-disc ml-6 text-lg leading-relaxed">
          <li><strong>Artificial Intelligence & Machine Learning:</strong> Advanced algorithms...</li>
          <li><strong>Internet of Things (IoT):</strong> Connected devices...</li>
          <li><strong>Edge Computing:</strong> Processing data closer...</li>
          <li><strong>Quantum Computing:</strong> Next-generation computing...</li>
        </ul>
      </section>

      <section id="digital-transformation" className="mb-12">
        <h2 className="text-2xl font-extrabold mb-6 text-brand-primary">Digital Transformation</h2>
        <ul className="list-disc ml-6 text-lg leading-relaxed">
          <li><strong>Cloud-Native Architecture:</strong> Modern applications...</li>
          <li><strong>Data-Driven Decision Making:</strong> Advanced analytics...</li>
          <li><strong>Customer Experience:</strong> Digital channels...</li>
          <li><strong>Process Automation:</strong> Robotic process automation...</li>
        </ul>
      </section>

      <section id="sustainability" className="mb-12">
        <h2 className="text-2xl font-extrabold mb-6 text-brand-primary">Sustainability</h2>
        <ul className="list-disc ml-6 text-lg leading-relaxed">
          <li><strong>Green Technology:</strong> Clean energy solutions...</li>
          <li><strong>Circular Economy:</strong> Innovative business models...</li>
          <li><strong>Carbon Management:</strong> Advanced tools...</li>
          <li><strong>Sustainable Supply Chains:</strong> Organizations are reimagining...</li>
        </ul>
      </section>

      <section id="future-work" className="mb-12">
        <h2 className="text-2xl font-extrabold mb-6 text-brand-primary">Future of Work</h2>
        <ul className="list-disc ml-6 text-lg leading-relaxed">
          <li><strong>Hybrid Workplaces:</strong> Advanced collaboration tools...</li>
          <li><strong>AI-Powered Productivity:</strong> Intelligent tools...</li>
          <li><strong>Skills Revolution:</strong> Continuous learning...</li>
          <li><strong>Employee Experience:</strong> Digital workplace solutions...</li>
        </ul>
      </section>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <a href="/articles/streamlined-processes" className="group flex items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Streamlined Processes</h3>
            <p className="text-gray-500">Learn about building and implementing effective digital transformation strategies.</p>
          </div>
          <ArrowRight className="w-6 h-6 text-[#FF5F1E] transform group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </article>
  </div>
  );
};

export default InnovativeSolutions;
