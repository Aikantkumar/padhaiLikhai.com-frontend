import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login.jsx'
import Home from './pages/Home.jsx'
// import Courses from '../src/components/Dashboard/Courses.jsx'
import Course from './pages/Course.jsx';
import Lenis from 'lenis'
import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';
import Scrolltrigger from 'gsap/all'
import Teacherprofiles from './pages/Teacherprofiles.jsx';
import PersonalProfiles from './pages/PersonalProfiles.jsx';
import SeeAllEnrollments from './components/personalProfileComponents/Enrollments/SeeAllEnrollments.jsx';
// import ShowTeacherProfile from './components/ShowTeacherProfile.jsx';
// import ShowPlaylists from './components/personalProfileComponents/Playlist/ShowPlaylists.jsx';
// import ScheduleTest from './components/personalProfileComponents/ScheduleTest/ScheduleTest.jsx';
// import AttemptTest from './components/personalProfileComponents/ScheduleTest/AttemptTest.jsx';
// import Register from './components/Auth/Register.jsx';
import TeacherList from './pages/TeacherList.jsx';
import TeacherProfile from './pages/TeacherProfile.jsx';
import Registerpage from './pages/Registerpage.jsx';
import Loginpage from './pages/Loginpage.jsx';
import ShowAllPlaylists from './pages/ShowAllPlaylists.jsx';
import AttemptTheTest from './pages/Test/AttemptTheTest.jsx';
import ScheduleTheTest from './pages/Test/ScheduleTheTest.jsx';

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
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registerpage/>} />
          <Route path='/login' element={<Loginpage/>} />
          <Route path='/course' element={<Course />} />
          <Route path='/teacherlist' element={<TeacherList/>} />
          <Route path='/teacherProfile' element={<TeacherProfile/>} />
          <Route path='/personalProfile' element={<PersonalProfiles/>} />
          <Route path='/allenrollments' element={<SeeAllEnrollments/>} />
          <Route path='/showplaylists' element={<ShowAllPlaylists/>} />
          <Route path='/attemptTest' element={<AttemptTheTest/>} />
          <Route path='/scheduleTest' element={<ScheduleTheTest/>} />
          

          {/* <Route path='/' element={<Courses />} /> */}
          {/* <Route path='/' element={<Teacherprofiles />} /> */}
          {/* <Route path='/' element={<ShowTeacherProfile />} /> */}
          {/* <Route path='/' element={<SeeAllEnrollments/>} /> */}
          {/* <Route path='/' element={<ShowPlaylists/>} /> */}
          {/* <Route path='/' element={<ScheduleTest/>} /> */}
          {/* <Route path='/' element={<AttemptTest/>} /> */}
          

        </Routes>
      </Router>
    </>
  )
}

export default App