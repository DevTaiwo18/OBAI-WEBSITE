import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import resourcesHeroImage from '../../assets/resources_hero.png'; // Replace with your correct path

const HaveCar = () => {
  const navigate = useNavigate(); // To navigate programmatically

  const handleChatClick = () => {
    navigate('/repair-bot'); // Navigate to the /repair-bot page
  };

  return (
    <section className="bg-[#FFFDF9] py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left Section: Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-extrabold md:text-4xl md:font-extrabold text-[#171717] mb-4">
            Have a car question?
          </h2>
          <p className="text-[#606060] mb-6">
            Chat with our trusted RepairBot about any questions you have!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-b from-[#FF711E] to-[#FF471E] text-white font-bold py-3 px-6 rounded-full hover:from-[#FF5F1E] hover:to-[#FF4D1E] transition duration-300 cursor-pointer w-full md:w-auto shadow-lg" // Added shadow to the button
            style={{
              boxShadow: '0px 9px 20px rgba(255, 95, 30, 0.3)', // Button shadow using the brand's orange
            }}
            onClick={handleChatClick}
          >
            Chat
          </motion.button>
        </div>

        {/* Right Section: Single Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <motion.div
            className="cursor-pointer" // Added shadow to the image container
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={resourcesHeroImage}
              alt="Car resources"
              className="h-auto w-full max-w-xs md:max-w-md object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HaveCar;
