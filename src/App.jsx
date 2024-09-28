import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Component/Home_Page/Home';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import About from './Component/About_Us/About';
import Resources from './Component/Resources/Resources';
import Repairbot from './Component/RepairBot/Repairbot';
import Contact from './Component/Contact_Us/Contact';
import Demo from './Component/Demo/Demo';
import './index.css';
import Howitswork from './Component/HowItsWorkFolder/Howitswork';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -50
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App bg-[rgb(249,249,255)]">
      <Header />
      <main className='mt-20 md:mt-17 overflow-hidden'>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/how-we-started" element={<AnimatedPage><Howitswork /></AnimatedPage>} />
            <Route path="/resources" element={<AnimatedPage><Resources /></AnimatedPage>} />
            <Route path="/repair-bot" element={<AnimatedPage><Repairbot /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/demo" element={<AnimatedPage><Demo /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
