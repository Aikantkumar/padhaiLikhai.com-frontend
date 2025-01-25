import React from 'react'
import Page1 from '../components/Dashboard/Page1.jsx'
import Register from "../components/Auth/Register.jsx"
import Login from "../components/Auth/Login.jsx"
import Footer from '../components/Dashboard/Footer.jsx'
import { Router } from 'react-router-dom'
const Home = () => {
  return (
    <>
        {/* <Page1 /> */}
        {/* <Route  path='/register' element={<Register/>} /> */}
        {/* <Register/> */}
        <Login/>
        {/* <Footer/> */}
    </>
  )
}

export default Home