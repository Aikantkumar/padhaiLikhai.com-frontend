// FULL PROFILE

import React from 'react';
import  { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const ShowTeacherProfile = () => {
    const {id} = useParams()
    const [userData, setUserData] = useState(null)

    // const location = useLocation()
    // const { photo } = location.state //we have sent photo in state along with the params


    useEffect(() => {


        async function fetchuserdata() {
            try {
                const response = await fetch(`/api/v1/teacher/get-teacherdata/${id}`) //fetch from registerteacher function 
                const data = await response.json();
                setUserData(data)
    
                toast.success(response.data.message)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

        



        fetchuserdata()
        
    }, [id])


    const handleEnroll = async() => {
        try {
            const user =  JSON.parse(localStorage.getItem('user'))
            const studentId = user._id
    
            const teacherId = id  //const {id} = useParams()
    
            const response = await axios.post("http://localhost:4000/api/v1/teacher/getAllEnrollments", {teacherId, studentId},
                {
                    withCredentials : "true",
                    header: {"Content-Type" : "application/json"}
                }
            )
    
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    
    


  return (
        <>
            <div className=' bg-[#0D0D0D] flex flex-row gap-3 p-3'>
                <div className=' relative w-[71vw] h-[200vh] left bg-gray-800 rounded-[8px] p-3'>
                    <div className='h-[200px] bg-yellow-400 rounded-[8px]'></div>
                    <div className='absolute top-[150px] left-[30px] h-[200px] w-[200px] rounded-full bg-sky-400'>
                       <img src={userData.avatar} alt="Profile photo" />
                    </div>

                    <div className="text  text-[#B8A895] absolute top-[360px] w-[65vw]">
                        <div className="name pl-[30px]">
                            <div className="fullname text-[30px] font-semibold tracking-[4px]"> `{userData.firstName} {userData.lastName}` </div>
                        </div>

                        <div className="line h-[0.5px] bg-slate-500"></div>

                        <div className="fields pl-[30px] text-[20px] font-semibold tracking-[4px]">{userData.fields}</div>

                        <div className="line h-[0.5px] bg-slate-500"></div>

                        <div className="specialisation pl-[30px] text-[20px] font-semibold tracking-[4px]">{userData.specialisation}</div>

                        <div className="line h-[0.5px] bg-slate-500"></div>

                        <div className="qualification pl-[30px] text-[20px] font-semibold tracking-[4px]">{userData.qualifications}</div>

                        <div className="line h-[0.5px] bg-slate-500"></div>

                        <div className="achievements pl-[30px] text-[20px] font-semibold tracking-[4px]">{userData.achievements}</div>

                        <div className="line h-[0.5px] bg-slate-500"></div>

                        <div className="contact pl-[30px] text-[20px] font-semibold tracking-[4px]">{userData.contact}</div>
                    </div>

                    <div onClick={() => handleEnroll()} className='bg-[#E94B35] button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-white rounded-md'>Enroll</div>
                </div>
                <div className=' fixed  right-[10px] w-[25vw] h-[97vh] p-3 right bg-gray-800 rounded-[8px] flex flex-col items-center'>
                    <div className='text-white text-[20px] pt-[100px] text-center'>
                        Start a conversation with your favourite Teacher
                    </div>
                    <div className='text-slate-400 pt-[20px] pb-[20px]'>
                        Drop a message today
                    </div>
                    <div className='bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Message</div>
                </div>
            </div>
        </>
  )
}

export default ShowTeacherProfile