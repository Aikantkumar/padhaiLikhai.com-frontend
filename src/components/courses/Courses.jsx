import React from 'react'
import { useNavigate } from 'react-router-dom'

const Courses = () => {

    const navigate = useNavigate()

    const handleClass = (item) => {
        navigate(`/teacherlist/${item}`) //TeachProfiles page
    }



  return (
    <>
        <div onClick={() => handleClass('6to8')}>Class 6 to 8</div>
        <div onClick={() => handleClass('9to10')}>Class 9 to 10</div>
        <div onClick={() => handleClass('11to12Sc')}>Class 11 to 12 Science</div>
        <div onClick={() => handleClass('11to12Cm')}>Class 11 to 12 Commerce</div>
        <div onClick={() => handleClass('11to12Hu')}>Class 11 to 12 Humanities</div>
       
    </>
  )
}

export default Courses