import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners'; // Import the spinner
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import Home from './Component/Home_Page/Home';
import About from './Component/About_Us/About';
import Contact from './Component/Contact_Us/Contact';
import Howitswork from './Component/HowItsWorkFolder/Howitswork';
import './index.css';

function App() {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Simulate loading (this could be replaced with real loading logic, like data fetching)
  useEffect(() => {
    //setTimeout(() => setIsLoading(false), 1000); // simulate loading delay
  }, []);

  return (
    <div className="App bg-[rgb(249,249,255)]">
      <>
        <Header />
        <main className="mt-20 md:mt-17 overflow-hidden">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-we-started" element={<Howitswork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </>

    </div>
  );
}

//<Route path="/" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Home /></Suspense>} />
//<Route path="/about" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><About /></Suspense>} />
//<Route path="/how-we-started" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Howitswork /></Suspense>} />
//<Route path="/contact" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#FF5F1E" size={50} /></div>}><Contact /></Suspense>} />


export default App;
