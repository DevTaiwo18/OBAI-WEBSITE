import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Kameron from '../../assets/Kameron_bg2.jpg';
import Justin from '../../assets/Justin_bg.jpg';
import Todd from '../../assets/todd.webp';
import Mo from '../../assets/Mo_Daniel.png';
import Frank from '../../assets/FrankLamarBG.jpg';
import Adeyemi from '../../assets/adeyemiBackground.jpg';
import Waldo from '../../assets/waldo_background.jpg';
import Jonathan from '../../assets/Jonathan_background.jpg';
import LinkedIn from '../../assets/LinkedIn.svg';

const teamMembers = [
  { name: "Kameron Seabrook", role: "Founder & CEO", image: Kameron, linkedin: "https://www.linkedin.com/in/kameron-seabrook/" },
  { name: "Justin Fields", role: "Co-Founder & Appraiser", image: Justin, linkedin: "https://www.linkedin.com/in/justin-fields-7686b9155/" },
  { name: "Frank Lamar", role: "Head of Engineering", image: Frank, linkedin: "https://www.linkedin.com/in/frankielamar/" },
  { name: "Todd Hostetler", role: "Head of UX & UI", image: Todd, linkedin: "https://www.linkedin.com/in/toddhostetler/" },
  { name: "Jonathan McCottry", role: "Sr. Software Engineer", image: Jonathan, linkedin: "https://www.linkedin.com/in/jemccottry/" },
  { name: "Waldo Rabie", role: "Sr. Software Engineer", image: Waldo, linkedin: "https://www.linkedin.com/in/waldo-rabie-3b86b5136/" },
  { name: "Mo Daniel", role: "Jr. Software Developer", image: Mo, linkedin: "https://www.linkedin.com/in/modupe-daniel/" },
  { name: "Adeyemi Taiwo", role: "Jr. Software Engineer", image: Adeyemi, linkedin: "https://www.linkedin.com/in/adeyemi-taiwo-5892082b0/" },
];

const TeamMemberCard = ({ name, role, image, linkedin }) => (
  <motion.div
    className="relative w-full bg-gradient-to-b from-brand-tertiary to-brand-primary rounded-lg overflow-hidden shadow-custom hover:shadow-lg transition-shadow duration-300"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Image Container */}
    <div className="w-full aspect-[4/3]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* Content Section */}
    <div className="flex flex-col items-start p-4 sm:p-6 bg-brand-white">
      <div className="text-left w-full mb-3">
        <h4 className="text-base sm:text-lg font-bold text-brand-dark mb-1">{name}</h4>
        <p className="text-sm text-brand-dark">{role}</p>
      </div>
      <div className="w-full border-t border-gray-200 my-2"></div>
      <div className="pt-2">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s LinkedIn Profile`}
          className="inline-block"
        >
          <img src={LinkedIn} alt="LinkedIn" className="w-6 sm:w-8 h-auto"/>
        </a>
      </div>
    </div>
  </motion.div>
);

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

const DreamTeam = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-8 sm:mb-12 leading-tight px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Dream Team Behind the Tech
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamTeam;