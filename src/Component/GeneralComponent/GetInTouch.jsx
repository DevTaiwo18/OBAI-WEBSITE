import React from 'react';
import contact_image from '../../assets/Contact_img.png'; // Ensure the correct path for your image
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <div className="relative mx-auto py-3 md:py-8 px-3 md:px-20">
      {/* Background image for large screens */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={contact_image}
          alt="Get in touch background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative bg-white rounded-lg shadow-lg max-w-full lg:flex items-center justify-between p-6 md:p-12 z-10"
        style={{
          boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                      22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                      13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                      6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                      1px 7px 15px 0px rgba(23, 23, 23, 0.05)`
        }}
      >
        {/* Text section */}
        <div className="lg:w-3/4 mb-4 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-4">
            Get in touch
          </h2>
          <p className="text-[#606060] mb-4 md:mb-0">
            Have more questions or want to make sure the tech is a right fit? Reach out to us and get in touch!
          </p>
        </div>

        {/* Button section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="lg:w-1/4 flex justify-end w-full lg:w-auto"
        >
          <a
            href="/contact"
            className="bg-gradient-to-b from-[#FF711E] to-[#FF471E] text-white font-bold py-3 px-6 rounded-full hover:from-[#FF5F1E] hover:to-[#FF4D1E] transition duration-300 text-center w-full lg:w-auto"
            style={{
              boxShadow: '0px 9px 20px rgba(255, 95, 30, 0.3)', // Button shadow using the brand's orange
            }}
          >
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
