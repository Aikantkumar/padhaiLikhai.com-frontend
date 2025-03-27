import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ScheduleTest = () => {

    const { userId } = JSON.parse(localStorage.getItem('userId'))

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [paper, setPaper] = useState(null)
    const [time, settime] = useState("1")

    const [testData, setTestData] = useState([])
    const [submissions, setSubmissions] = useState([])

    useEffect(() => {
        const response = fetch(`http://localhost:4000/api/v1/teacher/fetch-tests/${userId}`)
        const data = response.json()

        setTestData(data)


    }, [userId])


    const handleSchedulekardoTest = () => {



        try {
            const formData = new FormData()
            formData.append("title", title)
            formData.append("description", description)
            formData.append("date", date)
            formData.append("paper", paper)
            formData.append("time", time)


            const response = axios.post(`http://localhost:4000/api/v1/teacher/schedule/test/${userId}`, { title, description, date, paper, time },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            )

            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleTestFile = async(testId) => {
        try {

            const submissionPage = document.getElementById('submissionsOfTests')
            submissionPage.classList.remove('submissionsOfTests')


            const response = await fetch(`http://localhost:4000/api/v1/student/submissions/${testId}`)
            const data = response.json()

            setSubmissions(data)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }


    }

    const handlecross5 = () => {
        const submissionPage = document.getElementById('submissionsOfTests')
            submissionPage.classList.add('submissionsOfTests')
    }

    return (
        <>
            <div className='bg-[#0D0D0D]   flex flex-row p-6 gap-2'>
                <div className="left bg-gray-800 w-[50vw] h-[95vh] rounded-[8px] p-2">
                    <div className='text-white text-3xl font-thin'>Schedule a Test/Assignment</div>
                    <div className=' mt-[70px] flex flex-col items-center'>


                        <form onSubmit={handleSchedulekardoTest} action="">

                            <div className='mb-[10px]'>
                                <div className='text-white text-xl '>Title</div>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' type="text" />
                            </div>

                            <div className='mb-[10px]'>
                                <div className='text-white text-xl '>Description</div>
                                <input value={description} onChange={(e) => setDescription(e.target.value)} className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' type="text" />
                            </div>

                            <div className='mb-[10px]'>
                                <div className='text-white text-xl '>Date</div>
                                <input value={date} onChange={(e) => setDate(e.target.value)} className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white  border-white ' type="date" name="" id="" />
                            </div>

                            <div className='mb-[10px]'>
                                <div className='text-white text-xl '>Test Paper/Assignment</div>
                                <input value={paper} onChange={(e) => setPaper(e.target.value)} className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' type="file" name="" id="" />
                            </div>

                            <div className='mb-[10px]'>
                                <div className='text-white text-xl '>Alloted Time of Examination </div>
                                <select value={time} onChange={(e) => settime(e.target.value)} className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' name="" id="">
                                    <option value="">30 min</option>
                                    <option value="">1 hr</option>
                                    <option value="">2 hr</option>
                                    <option value="">3 hr</option>
                                </select>
                            </div>

                            <button type="submit" className='mt-[20px] cursor-pointer   bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Schedule</button>
                        </form>
                    </div>
                </div>


                <div className="right bg-gray-800 w-[50vw] h-[95vh] rounded-[8px] p-2">
                    <div className='text-white text-3xl font-thin mb-[50px]'>All Tests/Assignments</div>


                    {
                        testData.map((test) => (
                            <div onClick={() => handleTestFile(test.id)} key={test.id} className='h-[100px] w-[40vw] border-[1px] border-white rounded-[5px] flex flex-row gap-3 items-center'>
                                <div className='h-[90px] w-[180px]  bg-red-600 rounded-[8px] border-[1px] border-white'></div>
                                <div className="pl-2">
                                    <iframe src={test.paper} className="w-full h-64" title="Paper"></iframe>
                                    <div className='text-[15px] text-white'> {test.title} </div>
                                    <div className='text-[13px] text-white'> {test.description} </div>
                                    <div className='text-[13px] text-white'> {test.time} </div>
                                    <div className='text-[13px] text-white'> {test.date} </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* <div className='img h-[50px] w-[50px] bg-yellow-100 rounded-full ml-2'></div>
                                <div className="name">
                                    <div className="name text-white">name</div>
                                    <div className="username text-white">username</div>
                                </div>
                                <div className="file"> file</div> */}

                </div>

                <div id='submissionsOfTests' className='submissionsOfTests absolute  opacity-1 border-white border-[1px] bg-gray-800 rounded-[8px] h-[600px] w-[600px] flex p-4'>
                    <div>
                        {/* <div className='text-white text-[30px] font-thin'>`All Videos of ${ }`</div> */}
                        <div onClick={() => handlecross5()} className='text-white cursor-pointer absolute right-2 top-1'>X</div>
                        <div>

                            {
                                submissions.map((subm) => {
                                    
                                    const fetchStudentDetails = async (studentId) => {
                                        try {
                                          const response = await fetch(`http://localhost:4000/api/v1/users/user-details/${studentId}`);
                                          const data = await response.json();
                                          return data;
                                        } catch (error) {
                                          console.error("Error fetching student details:", error);
                                          return null;
                                        }
                                    };

                                    const [studentdetails, setStudentdetails] = React.useState(null)

                                    React.useEffect(() => {
                                        const getData = async() => {
                                            const data = await fetchStudentDetails(subm.owner);
                                            setStudentdetails(data);
                                    
                                        }

                                        getData()
                                    },[subm.owner])

                                    return (
                                        <div key={subm.id} className="video flex flex-row items-center w-[500px] p-1 h-[100px] border-[1px] border-white rounded-[8px]">
                                            
                                            <div className="pl-2">
                                                {/* <video src={subm.videoFile}></video> */}
                                                <img src={studentdetails.avatar} alt="Student Avatar" className="h-10 w-10 rounded-full" />
                                                <div className='text-[15px] text-white'> {studentdetails.fullName} </div>
                                                <div className='text-[13px] text-white'> {studentdetails.userName} </div>
                                                <iframe src={subm.file} frameborder="0" className='w-full h-64'></iframe>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        {/* <div className='mt-[20px] cursor-pointer  absolute bottom-2 left-[100px]  bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Add</div> */}
                    </div>
                </div>

            </div>
        </>
    )


}

export default ScheduleTest