import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import Chat from './Chat';

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

function Repairbot() {
  return (
    <div className="pt-19 md:pt-23"> {/* Added padding-top */}
      <Helmet>
        <title>OBAI - Repairbot</title>
        <meta name="description" content="Welcome to the OBAI website Repairbot page." />
      </Helmet>
      
      <AnimatedSection>
        <Chat />
      </AnimatedSection>

    </div>
  );
}

export default Repairbot;