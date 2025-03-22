import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const SeeAllEnrollments = () => {
    const { teachId } = useParams() //assuming that we will get this id to show user's details 
    const [studentarray, setStudentArray] = useState([])
    useEffect(() => {

        const fetchStudentdetails = (userIds) => {
            const studentdetails = userIds.map(userId => { fetch(`/api/v1/users/user-details/${userId}`) })
            const students = Promise.all(studentdetails) //Promise.all waits for all requests to finish.
            // now in students array we have objects and each object consists of all the details of the user i.e avatar, userName, etc..
            setStudentArray(students)

        }


        const showEnrollments = () => {
            const response = fetch(`/api/v1/teacher/get-enrollments/${teachId}`)
            const data = response.json()
            fetchStudentdetails(data.enrollments)
        }


        showEnrollments()
    }, [teachId])




    return (
        <>

            <div className='grid grid-cols-2 bg-[#0D0D0D] text-white h-[100vh] p-10'>
                <div>
                    {studentarray.map((student) => {
                        <div key={student.id} className=' flex flex-row items-center relative w-[500px] z-10 h-[130px] border-[2px] border-white rounded-[40px]'>
                            <div className='absolute h-[126px] w-[70px] bg-[#E94B35] rounded-l-[40px] left-0 border-r-[2px] border-white'> </div>
                            <div className="absolute left-[30px]  image h-[100px] w-[100px] border-[2px] border-white bg-yellow-200 rounded-full"><img src={student.avatar} alt="" /> </div>
                            <div className='absolute w-[300px] h-[127px] text-white left-[150px]'>
                                <div className='text-[25px] font-extralight tracking-[2px]'>@{student.userName}</div>
                                <div className='text-[20px] font-extralight tracking-[2px]'>{student.fullName}</div>
                            </div>
                        </div>
                    })}
                </div>
                <div>2</div>
            </div>
        </>
    )
}

export default SeeAllEnrollments