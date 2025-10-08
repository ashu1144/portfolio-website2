import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route , Routes } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import FullScreenNav from './components/Navigation/FullScreenNav'
import About from './pages/About'


// import './App.css'

function App() {
  const [navbar, setNavbar] = useState(false)

  return (
    <div className='text-white '>
      <div className={`${navbar ? "top-0" : "-top-[100vh]"} absolute h-screen  z-10 w-full bg-red-800 transition-all duration-600 overflow-hidden`}>
        <FullScreenNav />
      </div>
      <Navbar setNavbar={setNavbar} navbar={navbar} ></Navbar>
      <Routes>
        <Route path='/' element={<Home setNavbar={setNavbar} ></Home>} ></Route>
        <Route path='/about' element={<About setNavbar={setNavbar} ></About>} ></Route>
      </Routes>

      
    </div>
  )
}

export default App
