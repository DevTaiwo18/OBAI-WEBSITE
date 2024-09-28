import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaBullseye, FaTools } from 'react-icons/fa'; // FontAwesome icons

const testimonials = [
  {
    icon: <FaCar className="text-[#FF5F1E] text-3xl" />,
    text: "OBAI's has revolutionized our hail claims process. Its intuitive interface and real-time updates have significantly sped up assessments for both adjusters and customers. We've seen significant improvements in efficiency and customer satisfaction. Highly recommend!",
    name: 'Chris Fleming',
    role: 'Insurance Appraisal Services',
    lastTitle: 'President' 
  },
  {
    icon: <FaBullseye className="text-[#FF5F1E] text-3xl" />,
    text: "OBAI's innovative approach to hail claims has been a game-changer. Working with their thorough and systematic damage program was incredibly rewarding. Their user-friendly platform and efficient process are impressive.",
    name: 'Jordan Roe',
    role: 'Entrepreneur Center',
    lastTitle: 'Director, Venture Development' 
  },
  {
    icon: <FaTools className="text-[#FF5F1E] text-3xl" />,
    text: "Working closely with the OBAI team, I've witnessed their incredible progress in streamlining hail damage claims. The app is user-friendly and offers real-time updates, making the process seamless. It's been rewarding to provide feedback and see their vision succeed. Truly impressive work!",
    name: 'Treyven Bruch',
    role: 'Safewave, CEO & Founder',
    lastTitle: 'CEO & Founder' 
  }
];

const TestimonialCard = ({ icon, text, name, role, lastTitle }) => (
  <motion.div
    className="relative bg-white p-6 rounded-[30px] shadow-lg cursor-pointer flex flex-col items-start"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    style={{
      boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                  22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                  13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                  6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                  1px 7px 15px 0px rgba(23, 23, 23, 0.05)`
    }}
  >
    {/* Icon should be placed halfway outside the card */}
    <div className="absolute -top-6 left-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center z-10">
      {icon}
    </div>
    {/* Text should start from the left without padding */}
    <div className="ml-0 mt-4">
      <p className="text-[#171717] mb-4 text-left">{text}</p>
      <div className="font-bold text-[#171717] text-left">{name}</div>
      <div className="text-sm text-[#606060] text-left">{role}</div>
      {lastTitle && <div className="text-sm font-semibold text-[#606060] mt-1 text-left">{lastTitle}</div>} {/* Last title at the bottom */}
    </div>
  </motion.div>
);

export default function PeopleSay() {
  return (
    <section className="bg-[#FFFDF9] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#171717] mb-12">People Say...</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))} 
        </div>
      </div>
    </section>
  );
}
