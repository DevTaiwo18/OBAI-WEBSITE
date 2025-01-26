import { motion } from 'framer-motion';
import accuracyImage from '../../assets/Accuracy.png';
import aiImage from '../../assets/oie_Gu30xcjX7ter.png';
import repairBotImage from '../../assets/RepairBot.png';

const features = [
  {
    title: 'Seamless Integration Through OpenAPI',
    description: 'Connect effortlessly with your legacy systems using OpenAPI. Automate the creation of damage requests, customer communication, and review workflows directly from your existing infrastructure.',
    image: repairBotImage
  },
  {
    title: 'Advanced Dent Detection Model',
    description: 'Utilize our cutting-edge AI vision model trained on vehicle images under diverse lighting conditions and scenarios. Accurately identify dents, damages, and repair requirements for precise scope.',
    image: aiImage
  },
  {
    title: 'Fraud Prevention with Smart Detection',
    description: 'Our system actively scans for suspicious patterns and errors in damage captures to help identify potential fraud, ensuring accurate claim evaluations and reduced risks.',
    image: repairBotImage
  },
  {
    title: 'Customizable Workflows',
    description: 'Tailor the platform to your specific workflows—whether managing claims, generating estimates, or producing quotations. Streamline customer communication and satisfaction with our flexible tools.',
    image: accuracyImage
  },
  {
    title: 'Management Console',
    description: `Tailor the system to fit your team's unique workflow with adjustable settings in our intuitive management console. Streamline operations without disrupting existing processes—work faster while maintaining your team’s proven efficiency.`,
    image: accuracyImage
  },
  {
    title: 'Comprehensive KPIs & Reporting Tools',
    description: 'Track performance with detailed metrics like time-in/time-out analytics, audit trails, and efficiency reports. Prove ROI by demonstrating time savings and improvements in customer satisfaction.',
    image: repairBotImage
  }
];

const FeatureCard = ({ title, description, image }) => (
  <motion.div
    className="relative bg-white rounded-[30px] shadow-custom cursor-pointer flex flex-col justify-end bg-no-repeat bg-cover"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{
      //backgroundImage: `url(${image})`,
      backgroundPosition: 'bottom right',
      backgroundSize: 'contain',
      height: '180px',  // Ensures consistent height for the images
      paddingTop: '40px'
    }}
  >
    {/* Text positioned at the top left, without padding */}
    <div className="absolute top-5 left-0 bg-white bg-opacity-80 rounded-tl-[30px] p-4 z-10">
      <h3 className="text-xl font-bold text-[#171717]">{title}</h3>
      <p className="text-[#606060] text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function KeyFeatures() {
  return (
    <section className="py-8 md:py-16 px-1 md:px-16 bg-[#F9F9FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#171717] mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
