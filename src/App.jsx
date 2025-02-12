import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import Home from './Component/Home_Page/Home';
import About from './Component/About_Us/About';
import Contact from './Component/Contact_Us/Contact';
import Howitswork from './Component/HowItsWorkFolder/Howitswork';
import './index.css';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
  }, []);

  return (
    <div className="App bg-[rgb(249,249,255)]">
      <>
        <Header />
        <main className="mt-20 md:mt-17 overflow-hidden">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<Howitswork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </>

    </div>
  );
}


export default App;
