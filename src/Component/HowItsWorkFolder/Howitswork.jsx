import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import KeyFeatures from '../Home_Page/KeyFeatures';
import HaveCar from '../GeneralComponent/HaveCar';
import SomeReading from '../GeneralComponent/SomeReading';
import GetInTouch from '../GeneralComponent/GetInTouch';
import Ourtech from './Ourtech';
import Easy from './Easy';
import FAQ from './FAQ';

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

function Howitswork() {
    return (
        <div className="pt-19 md:pt-23"> {/* Added padding-top */}
            <Helmet>
                <title>OBAI - How it's work</title>
                <meta name="description" content="Welcome to the OBAI website How it's work page." />
            </Helmet>

            <AnimatedSection>
                <Ourtech />
            </AnimatedSection>

            <AnimatedSection>
                <Easy />
            </AnimatedSection>

            <AnimatedSection>
                <KeyFeatures />
            </AnimatedSection>

            <AnimatedSection>
                <FAQ />
            </AnimatedSection>

            <AnimatedSection>
                <HaveCar />
            </AnimatedSection>

            <AnimatedSection>
                <SomeReading />
            </AnimatedSection>

            <AnimatedSection>
                <GetInTouch />
            </AnimatedSection>

        </div>
    );
}

export default Howitswork;