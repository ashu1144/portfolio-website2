import { useState, useEffect } from 'react'
import { Route , Routes } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Navbar from './components/Navigation/Navbar'
// import FullScreenNav from './components/Navigation/FullScreenNav'
import About from './pages/About'
import Lenis from "@studio-freight/lenis";
// import TextReveal from './components/common/TextReveal'
// import './App.css'

function App() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;

    const updateScroll = () => {
      handleScroll();
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });

    return () => window.removeEventListener('scroll', requestTick);
  }, [lastScrollY]);

  // Render navbar to document body using portal to bypass Stair component
  const navbarPortal = createPortal(
    <div className={`fixed w-full top-0 z-[1000] transition-transform duration-300 navbar-fixed ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <Navbar />
    </div>,
    document.body
  );

  return (
    <>
      {navbarPortal}
      <div className='text-white '>
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
