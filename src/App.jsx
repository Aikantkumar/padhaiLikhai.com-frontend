import React, { useEffect } from 'react'
import Login from './components/Auth/Login.jsx'
import Home from './pages/Home.jsx'
import Courses from './components/courses.jsx'
import Lenis from 'lenis'
import gsap from 'gsap';
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
      <Home />
      {/* <Login /> */}
      {/* <Courses /> */}
    </>
  )
}

export default App