import React from 'react'

const ScheduleTest = () => {
    return (
        <>
            <div className='bg-[#0D0D0D]   flex flex-row p-6 gap-2'>
                <div className="left bg-gray-800 w-[50vw] h-[95vh] rounded-[8px] p-2">
                    <div className='text-white text-3xl font-thin'>Schedule a Test/Assignment</div>
                    <div className=' mt-[70px] flex flex-col items-center'>

                    
                    <form action="">

                        <div className='mb-[10px]'>
                            <div className='text-white text-xl '>Title</div>
                            <input className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' type="text" />
                        </div>

                        <div className='mb-[10px]'>
                            <div className='text-white text-xl '>Description</div>
                            <input className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' type="text"  />
                        </div>

                        <div className='mb-[10px]'>
                            <div className='text-white text-xl '>Date</div>
                            <input className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white  border-white ' type="date" name="" id="" />
                        </div>

                        <div className='mb-[10px]'>
                            <div className='text-white text-xl '>Test Paper/Assignment</div>
                            <input className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' type="file" name="" id="" />
                        </div>

                        <div className='mb-[10px]'>
                            <div className='text-white text-xl '>Alloted Time of Examination </div>
                            <select className='w-[250px] h-[35px] rounded-[5px] bg-gray-800 border-[1px] text-white border-white ' name="" id="">
                                <option value="">30 min</option>
                                <option value="">1 hr</option>
                                <option value="">2 hr</option>
                                <option value="">3 hr</option>
                            </select>
                        </div>

                        <div type="submit" className='mt-[20px] cursor-pointer   bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Schedule</div>
                    </form>
                    </div>
                </div>
                <div className="right bg-gray-800 w-[50vw] h-[95vh] rounded-[8px] p-2">
                    <div className='text-white text-3xl font-thin mb-[50px]'>All Tests/Assignments</div>

                    <div className='h-[100px] w-[40vw] border-[1px] border-white rounded-[5px] flex flex-row gap-3 items-center'>
                        <div className='img h-[50px] w-[50px] bg-yellow-100 rounded-full ml-2'></div>
                        <div className="name">
                            <div className="name text-white">name</div>
                            <div className="username text-white">username</div>
                        </div>
                        <div className="file"> file</div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default ScheduleTest