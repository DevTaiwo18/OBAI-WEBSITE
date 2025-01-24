import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import Contactus from './Contactus';
import ContactInfo from './ContactInfo';

const AnimatedSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function Contact() {
  return (
    <div className="pt-19 md:pt-23"> {/* Added padding-top */}
      <Helmet>
        <title>OBAI - Contact</title>
        <meta name="description" content="Welcome to the OBAI website Contact page." />
      </Helmet>

      <AnimatedSection>
        <Contactus />
      </AnimatedSection>

      <AnimatedSection>
        <ContactInfo />
      </AnimatedSection>


    </div>
  );
}

export default Contact;