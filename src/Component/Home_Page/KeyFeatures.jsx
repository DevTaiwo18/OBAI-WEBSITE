import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Seamless Integration Through OpenAPI',
    description: 'Connect effortlessly with your legacy systems using OpenAPI. Automate the creation of damage requests, customer communication, and review workflows directly from your existing infrastructure.'
  },
  {
    title: 'Advanced Dent Detection Model',
    description: 'Utilize our cutting-edge AI vision model trained on vehicle images under diverse lighting conditions and scenarios. Accurately identify dents, damages, and repair requirements for precise scope.'
  },
  {
    title: 'Fraud Prevention with Smart Detection',
    description: 'Our system actively scans for suspicious patterns and errors in damage captures to help identify potential fraud, ensuring accurate claim evaluations and reduced risks.'
  },
  {
    title: 'Customizable Workflows',
    description: 'Tailor the platform to your specific workflows whether managing claims, generating estimates, or producing quotations. Streamline customer communication and satisfaction with our flexible tools.'
  },
  {
    title: 'Management Console',
    description: `Tailor the system to fit your team's unique workflow with adjustable settings in our intuitive management console. Streamline operations without disrupting existing processes work faster while maintaining your team's proven efficiency.`
  },
  {
    title: 'Comprehensive KPIs & Reporting Tools',
    description: 'Track performance with detailed metrics like time-in/time-out analytics, audit trails, and efficiency reports. Prove ROI by demonstrating time savings and improvements in customer satisfaction.'
  }
];

const FeatureCard = ({ title, description }) => (
  <motion.div
    className="bg-white rounded-3xl shadow-lg overflow-hidden"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 font-serif text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function KeyFeatures() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-block">
            <p className="text-sm text-gray-600 font-black tracking-wide border border-gray-200 rounded-full px-4 py-1 bg-white shadow-sm">
              Our Features
            </p>
          </div>
          <h2 className="text-4xl font-black text-gray-900">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our platform transforms your workflow with powerful, intuitive tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}