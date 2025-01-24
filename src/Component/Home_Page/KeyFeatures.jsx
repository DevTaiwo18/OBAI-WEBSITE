import { motion } from 'framer-motion';
import accuracyImage from '../../assets/Accuracy.png';
import arRepairImage from '../../assets/AR repair.png';
import fiveMinutesImage from '../../assets/5 minutes.png';
import repairBotImage from '../../assets/RepairBot.png';

const features = [
  {
    title: 'AI Analysis',
    description: 'Advanced analysis to precisely measure damage. ',
    image: repairBotImage
  },
  {
    title: 'Open API into your existing systems',
    description: 'No hassle legacy system integrations.',
    image: accuracyImage
  },
  {
    title: 'Possible Fraud Detection',
    description: 'Flagging suspictious and obvious mistakes in each claim',
    image: accuracyImage
  },
  {
    title: 'Customizable Workflow',
    description: 'Tailored dashboards to fix organizational needs. ',
    image: repairBotImage
  }
];

const FeatureCard = ({ title, description, image }) => (
  <motion.div
    className="relative bg-white rounded-[30px] shadow-custom cursor-pointer flex flex-col justify-end bg-no-repeat bg-cover"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'bottom right',
      backgroundSize: 'contain',
      height: '280px'  // Ensures consistent height for the images
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
