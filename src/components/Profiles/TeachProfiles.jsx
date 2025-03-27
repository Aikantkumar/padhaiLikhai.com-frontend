
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const TeachProfiles = () => {

    const [teachers, setTeachers] = useState([])
    const navigate = useNavigate()
    const { item } = useParams()

    useEffect(() => {
        const fetchteachers = async () => {
            try {

                const response = await fetch(`/api/v1/teacher/get-profiles/${item}`)
                const data = await response.json()

                setTeachers(data.teachers)
                toast.success(response.data.message)

            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

       



        fetchteachers()
        
    }, [item])

    

    const handleTeachFullProfile = (teacher) => { //ShowTeacherProfile page
        navigate(`/teacher/${teacher.id}`) // make this route in app.jsx <Route path="/teacher/:id" element={<TeacherProfile />} />
    }



    return (
        <>
            <div className='h-[100vh] bg-[#0D0D0D] grid grid-cols-3 gap-5 p-5 '>
                {teachers.map((teacher) => {

                //  handleTeachFullProfile(teacher.id)
                <div onClick={() => handleTeachFullProfile(teacher)} key={teacher.id} className='relative text-white border-white border-[2px] h-[300px] bg-[#0D0D0D] rounded-[30px]'>
                    <div className='h-[70px] bg-[#E94B35] top-0 relative rounded-t-[30px]'>
                        <div className='absolute text-[20px] tracking-[5px] right-[10px] bottom-0'>{teacher.username}</div>
                    </div>
                    <div className='h-[130px] w-[130px] z-10 top-[30px] left-[20px] absolute border-white border-[2px] rounded-full bg-gray-400'> 
                        <img src={teacher.avatar} alt="profile photo" />
                    </div>
                    <div className="text">
                        <div className='absolute tracking-[2px] text-[15px] font-semibold right-[10px]'> `${teacher.firstName} ${teacher.lastName}` </div> {/* String interpolation is a method of embedding variables directly within strings. */}
                    </div>
                </div>
            })}



            </div>
        </>
    )
}

export default TeachProfiles