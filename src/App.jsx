import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login.jsx'
import Home from './pages/Home.jsx'
import Courses from '../src/components/Dashboard/Courses.jsx'
import Course from './pages/Course.jsx';
import Lenis from 'lenis'
import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';
import Scrolltrigger from 'gsap/all'

const App = () => {
  // gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   // Initialize Lenis
  //     const lenis = new Lenis({
  //       autoRaf: true,
  //     });

  //     // Listen for the scroll event and log the event data
  //     lenis.on('scroll', (e) => {
  //       console.log(e);
  //     });

  //     function raf(time) {
  //       lenis.raf(time);
  //       requestAnimationFrame(raf);
  //     }

  //     requestAnimationFrame(raf);
  // });



  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          
          
          {/* <Route path='/' element={<Courses />} /> */}
          <Route path='/' element={<Course />} />
          

        </Routes>
      </Router>
    </>
  )
}

export default App