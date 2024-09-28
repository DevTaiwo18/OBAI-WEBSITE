import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners'; // Import the spinner
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import './index.css';

const Home = lazy(() => import('./Component/Home_Page/Home'));
const About = lazy(() => import('./Component/About_Us/About'));
const Resources = lazy(() => import('./Component/Resources/Resources'));
const Repairbot = lazy(() => import('./Component/RepairBot/Repairbot'));
const Contact = lazy(() => import('./Component/Contact_Us/Contact'));
const Demo = lazy(() => import('./Component/Demo/Demo'));
const Howitswork = lazy(() => import('./Component/HowItsWorkFolder/Howitswork'));

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const AnimatedPage = ({ children }) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Simulate loading (this could be replaced with real loading logic, like data fetching)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // simulate loading delay
  }, []);

  return (
    <div className="App bg-[rgb(249,249,255)]">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#FF5F1E" size={50} /> {/* Spinner for initial loading */}
        </div>
      ) : (
        <>
          <Header />
          <main className="mt-20 md:mt-17 overflow-hidden">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Home /></Suspense></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><About /></Suspense></AnimatedPage>} />
                <Route path="/how-we-started" element={<AnimatedPage><Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Howitswork /></Suspense></AnimatedPage>} />
                <Route path="/resources" element={<AnimatedPage><Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Resources /></Suspense></AnimatedPage>} />
                <Route path="/repair-bot" element={<AnimatedPage><Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Repairbot /></Suspense></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Contact /></Suspense></AnimatedPage>} />
                <Route path="/demo" element={<AnimatedPage><Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Demo /></Suspense></AnimatedPage>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
