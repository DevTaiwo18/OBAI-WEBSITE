import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import SomeReading from '../GeneralComponent/SomeReading';
import HaveCar from '../GeneralComponent/HaveCar';
import GetInTouch from '../GeneralComponent/GetInTouch';
import ReHeading from './ReHeading';
import NewsletterSubscribe from './NewsletterSubscribe';

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

function Resources() {
  return (
    <div className="pt-19 md:pt-23"> {/* Added padding-top */}
      <Helmet>
        <title>OBAI - Resources</title>
        <meta name="description" content="Welcome to the OBAI website Resources page." />
      </Helmet>
      
      <AnimatedSection>
        <ReHeading />
      </AnimatedSection>

      <AnimatedSection>
        <NewsletterSubscribe />
      </AnimatedSection>

      <AnimatedSection>
        <SomeReading />
      </AnimatedSection>

      <AnimatedSection>
        <HaveCar />
      </AnimatedSection>

      <AnimatedSection>
        <GetInTouch />
      </AnimatedSection>

    </div>
  );
}

export default Resources;