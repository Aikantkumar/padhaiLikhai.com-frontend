import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const AttemptTest = () => {

    const { testId } = useParams()

    const [testData, setTestData] = useState(null)

    const [answerSheet, setAnswerSheet] = useState("")

    // const [time, setTime] = useState(testData.time)
    const [time, setTime] = useState(() => {
        switch (initialTime) {
            case '30 min': return 1800;
            case '1 hr': return 3600;
            case '2 hr': return 7200;
            case '3 hr': return 14400;
            default: return 0;

        }
    })


    useEffect(() => {


        async function fetchTest() {
            try {
                const response = fetch()
                const data = response.json()

                setTestData(data)

                toast.success(response.data.message)
            } catch (error) {
                toast.error(error.response.data.message)
            }

        }


        fetchTest()

    }, [testId])


    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(interval); // Stop the timer at 0 if time goes -ve
                    return 0;
                }
                return prevTime - 1;
            })

        }, 1000) //updates every second

        return () => clearInterval(interval); // Cleanup on unmount or re-run
    }, [time])



    const handleStart = () => {
        // alert('hlo')
        const testpage = document.getElementById('test')
        testpage.classList.remove('test')

        const startpage = document.getElementById('start')
        startpage.classList.add('test')
    }

    const handleTestSubmit = async () => {
        //we will store testId, ownerId and answer sheet together in a database  
        const studentId = JSON.parse(localStorage.getItem('userId'))

        try {
            const formData = new FormData()
            formData.append('answerSheet', answerSheet)

            const response = await axios.post(`http://localhost:4000/api/v1/student/submit-test/${testId}/student/${studentId}`, formData,
                {
                    withCredentials: true,
                    headers: { "Content-Type": "multipart/form-data" },
                }
            )

            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return `${hrs.toString().padStart(2,'0')}: ${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`

    }

    // const handleTimer = () => {



    //     if (time === '30 min') {
    //         if (time <= 0) {
    //             return;
    //         }

    //         setTime(1800) //1800 sec in 30 min
    //         const interval = setInterval(() => {
    //             setTime((prevTime) => prevTime - 1)
    //         }, 1000) //this updates every second

    //         return () => clearInterval(interval) //cleanup code
    //     }
    //     else if (time === '1 hr') {
    //         if (time <= 0) {
    //             return;
    //         }

    //         setTime(3600) //3600 sec in 1 hr
    //         const interval = setInterval(() => {
    //             (prevTime) => prevTime - 1

    //             setTime()


    //         }, 1000) //this updates every second

    //         return () => clearInterval(interval) //cleanup code
    //     }
    //     else if (time === '2 hr') {
    //         if (time <= 0) {
    //             return;
    //         }

    //         setTime(7200) //7200 sec in 2 hr
    //         const interval = setInterval(() => {
    //             setTime((prevTime) => prevTime - 1)
    //         }, 1000) //this updates every second

    //         return () => clearInterval(interval) //cleanup code
    //     }
    //     else if (time === '3 hr') {
    //         if (time <= 0) {
    //             return;
    //         }

    //         setTime(14400) //14400 sec in 3 hr
    //         const interval = setInterval(() => {
    //             setTime((prevTime) => prevTime - 1)
    //         }, 1000) //this updates every second

    //         return () => clearInterval(interval) //cleanup code
    //     }
    // }


    return (
        <>
            <div className=' relative bg-[#0D0D0D] text-white min-h-[150vh]  flex flex-col items-center'>

                <div id='start' className="start relative flex flex-col items-center">


                    <div className='text-[30px] mt-[70px] mb-[50px] font-thin'>Attempt the Test/Assignment</div>
                    <div className="info">
                        <div className='text-2xl'>{testData.title}</div>
                        <div>{testData.description}</div>
                        <div className='text-2xl'>{testData.date}</div>
                        <div>{testData.time}</div>
                        <div className='text-red-500 text-2xl'>{testData.isLive ? <span className='text-[red]'>Live</span> : <span>Not Live</span>}</div>
                    </div>

                    <div onClick={() => handleStart()} type="submit" className='mt-[20px] cursor-pointer   bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Start</div>

                </div>


                <div id='test' className=" test h-[100vh] absolute">
                    <div className=" left-0 timer pb-[20px] font-thin text-[40px] ">Time left: {formatTime(time)}</div>
                    <div className="questionpaper h-[700px] w-[700px] bg-[blue]">  {testData.paper}</div>
                    <div>Submit your Answers here</div>

                    <form onSubmit={handleTestSubmit} action="">
                        <input value={answerSheet} required onChange={(e) => setAnswerSheet(e.target.files[0])} type="file" name="" id="" />
                        <button type="submit" className='mt-[20px] cursor-pointer   bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Submit</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default AttemptTest