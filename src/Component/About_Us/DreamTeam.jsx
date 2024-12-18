import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Import PropTypes
import Kameron from '../../assets/kam.webp';
import Justin from '../../assets/justin.webp';
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
    className="bg-gradient-to-b from-brand-tertiary to-brand-primary rounded-lg-rounded overflow-hidden shadow-custom hover:shadow-lg transition-shadow duration-300"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Image */}
    <div>
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover object-center"
      />
    </div>

    {/* White Section: Name, Title, LinkedIn */}
    <div className="flex flex-col items-start p-6 bg-brand-white">
      <div className="text-left mb-4">
        <h4 className="text-lg font-bold text-brand-dark mb-1">{name}</h4>
        <p className="text-sm text-brand-dark">{role}</p>
      </div>
      <hr width="90%" size="1"/> 
      <div className="pt-2">
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
         <img src={LinkedIn} alt="Logo" width={30}/>
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