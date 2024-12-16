import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Import PropTypes
import Kameron from '../../assets/kam.webp';
import Justin from '../../assets/justin.webp';
import Todd from '../../assets/todd.webp';
import Mo from '../../assets/Mo_Daniel.png';
import Frank from '../../assets/frank_lamar.jpeg';
import Adeyemi from '../../assets/optimized/adeyemi.png';

const teamMembers = [
  { name: "Kameron Seabrook", role: "Founder & CEO", image: Kameron, linkedin: "https://www.linkedin.com/in/kameron-seabrook/" },
  { name: "Justin Fields", role: "Co-Founder & Appraiser", image: Justin, linkedin: "https://www.linkedin.com/in/justin-fields-7686b9155/" },
  { name: "Todd Hostetler", role: "Head of UX & UI", image: Todd, linkedin: "https://www.linkedin.com/in/toddhostetler/" },
  { name: "Mo Daniel", role: "Jr Software Developer", image: Mo, linkedin: "https://www.linkedin.com/in/modupe-daniel/" },
  { name: "Frank Lamar", role: "Head of Engineering", image: Frank, linkedin: "https://www.linkedin.com/in/frankielamar/" },
  { name: "Adeyemi Taiwo", role: "Jr Software Engineer", image: Adeyemi, linkedin: "https://www.linkedin.com/in/adeyemi-taiwo-5892082b0/" },
];

const TeamMemberCard = ({ name, role, image, linkedin }) => (
  <a href={linkedin} target="_blank" rel="noopener noreferrer">
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
  </a>
);

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

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
