import React from 'react';
import { motion } from 'framer-motion';
import Kameron from '../../assets/kam.webp';
import Justin from '../../assets/justin.webp';
import Todd from '../../assets/todd.webp';
import Mo from '../../assets/Mo_Daniel.png';
import Shane from '../../assets/shane.webp';
import Adeyemi from '../../assets/optimized/adeyemi.png';

const teamMembers = [
  { name: "Kameron Seabrook", role: "founder & CEO", image: Kameron },
  { name: "Justin Fields", role: "Co-Founder & Appraiser", image: Justin },
  { name: "Todd Hostetler", role: "Head of UX & UI", image: Todd },
  { name: "Mo Daniel", role: "Jr Front-End Developer", image: Mo },
  { name: "Shane York", role: "Head of Customer Success", image: Shane },
  { name: "Adeyemi Taiwo", role: "Jr Software Engineer", image: Adeyemi },
];

const TeamMemberCard = ({ name, role, image }) => (
  <motion.div 
    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="bg-[rgb(255,230,0)] h-64 flex items-center justify-center">
      <img src={image} alt={name} className="h-full w-full object-cover" />
    </div>
    <div className="p-6">
      <h4 className="text-xl font-extrabold text-blue-900 mb-1">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </motion.div>
);

const DreamTeam = () => {
  return (
    <section className="py-4 m-0 px-4 md:px-8 lg:px-16 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-2xl md:text-4xl font-extrabold text-blue-900 text-center mb-12 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Dream Team Behind the Tech
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamTeam;