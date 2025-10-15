import { useState, useEffect } from 'react'
import { Route , Routes } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import FullScreenNav from './components/Navigation/FullScreenNav'
import About from './pages/About'
import Projects from './pages/Projects'
import Lenis from "@studio-freight/lenis"; 
// import TextReveal from './components/common/TextReveal'
// import './App.css'

function App() {
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,      // how smooth (higher = slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,  // enable mouse wheel smoothing
      smoothTouch: false, // disable touch smoothing (optional)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className='text-white '>
      <div className={`${navbar ? "top-0" : "-top-[100vh]"} absolute h-screen  z-10 w-full bg-red-800 transition-all duration-600 overflow-hidden`}>
        <FullScreenNav />
      </div>
      <Navbar setNavbar={setNavbar} navbar={navbar} ></Navbar>
      <Routes>
        <Route path='/about' element={<Home setNavbar={setNavbar} ></Home>} ></Route>
        <Route path='/' element={<About setNavbar={setNavbar} ></About>} ></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>



      
    </div>
  )
}

export default App
