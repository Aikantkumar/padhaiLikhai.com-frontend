import React from 'react'
import { useNavigate } from 'react-router-dom';

const courses = () => {

    const navigate = useNavigate();

    const handleClass6to8 = async() => {
        
        navigate("/")
    }



    return (
        <>
            <div className="registerteacher h-[80vh] bg-[#0D0D0D]">
                <div className='flex justify-center items-center gap-5 mb-[70px]'>                            
                    <div className='animate-on-load1 opacity-0 text-[50px] tracking-[-3px] font-bold '>
                        <div className='text-[#B8A895] mb-[-25px]'>Lorem ipsum dolor sit</div>
                        <div className='text-[#B8A895] mb-[-25px]'>Lorem ipsum dolor sit</div>
                        <div className='text-[#B8A895]'>Lorem ipsum dolor sit</div>
                    </div>

                    <div class="border-l-2 border-gray-400 h-[300px]"></div>

                    <div className='animate-on-load2 opacity-0 text-[120px] text-[#B8A895] tracking-[-10px] font-semibold pl-[0vw] flex flex-col items-end'>
                        <div className='text-[#B8A895] mb-[-90px]'>REGISTER</div>
                        <div className='text-[#B8A895] mb-[-90px]'>AS A</div>
                        <div className='text-[#E94B35]'>TEACHER</div>
                    </div>
                </div>


                <div className='flex h-[5vh] items-center justify-center'>
                    {/* <div className="button text-white">Become a teacher</div> */}
                    <div className='button bg-[#E94B35] w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Become a teacher</div>
                </div>
            </div>

            <div className=" line w-full h-[1px] bg-gray-400 "></div>

            <div className="course bg-[#0D0D0D] flex flex-col items-center">
                <div className=' flex flex-row text-[65px] tracking-[-3px] font-semibold '>
                    <div className='text-[#B8A895]'>Continue as a</div>
                    <p className='text-[#E94B35] pl-[10px] '>student</p>
                    <p className='text-[#B8A895] pl-[10px]  '>...</p>
                </div>

                <div>
                    <div className="page2 pt-36 h-screen">
                        <p className=' mb-5  text-[#B7AB98]  tracking-[10px] '> about us</p>

                        <div className=' pl-2 text-[70px] flex flex-col gap-[2px] tracking-[-5px] font-semibold '>
                            <div className='line1 flex flex-row my-[-5px] mb-[-30px]'>
                                <p className='text-[#B8A895]'>I'm a</p>
                                <p className='pl-[10px] text-[#E94B35]'>selectively skilled</p>
                                <p className='pl-[10px] text-[#B7AB98]'> product</p>
                            </div>

                            <div className='line2 flex flex-row my-[-5px] mb-[-30px]'>
                                <p className='text-[#B8A895]'>designer with strong focus on</p>


                            </div>

                            <div className='line3 flex flex-row my-[-5px]  mb-[-30px]'>
                                <p className='text-[#B8A895]'> producing high quality &</p>


                            </div>

                            <div className='line4 flex flex-row my-[-5px] '>
                                <p className='text-[#B8A895]'>impactful digital experience</p>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className="page3 h-[110vh] bg-[#0D0D0D]">
                <div className='text-[200px] tracking-[-15px]  text-[#B8A895]'>select</div>
                <div className='text-[200px] tracking-[-15px] mt-[-100px] text-[#B8A895]'>your</div>
                <div className='text-[200px] tracking-[-15px] mt-[-100px]  text-[#E94B35]'>COURSES</div>
            </div>

            <div className="allcourses bg-white h-screen">
                <div className="coursepage1 flex flex-row h-screen">
                    <div className=' w-[60vw]  p-[20px]'>
                        <div className='tracking-[10px] mb-[40px]'>CATEGORY 1</div>
                        <div onClick={handleClass6to8} className="img h-[350px]  bg-yellow-300"></div>
                        <div className="txt">
                            <div onClick={handleClass6to8} className='text-[50px] tracking-[-3px] font-bold'>Class 6-8</div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                        </div>
                    </div>

                    <div class="border-l-2 border-neutral-400 h-[600px] mt-[20px]"></div>

                    <div className='w-[40vw]  p-[20px]'>
                        <div className='tracking-[10px] mb-[40px]'>CATEGORY 2</div>

                        <div className="txt mb-[70px]">
                            <div onClick={handleClass9to10} className='text-[50px] tracking-[-3px] font-bold'>Class 9-10</div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                        </div>

                        <div onClick={handleClass9to10} className="img h-[350px]  bg-yellow-300"></div>
                    </div>
                </div>



                <div className="coursepage2 flex flex-col ">
                    <div className=' w-[100vw] p-[20px]'>
                        <div className='tracking-[10px] '>CATEGORY 3</div>
                        <div className='text-[50px] text-[#E94B35] mb-[40px] tracking-[-3px] font-bold '>Science Stream</div>
                        <div className='flex flex-row gap-[50px]'>
                            <div onClick={handleClass11to12Science} className="img h-[300px] w-[30vw] bg-yellow-300"></div>
                            <div className="txt">
                                <div onClick={handleClass11to12Science} className='text-[50px] tracking-[-3px] font-bold'>Class 11-12 Boards and CUET</div>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                            </div>
                        </div>
                    </div>

                    <div className=" line w-[95vw] ml-[20px] h-[2px] bg-gray-400 "></div>

                    <div className=' w-[100vw] p-[20px]'>
                    {/* <div className='tracking-[10px] mb-[40px] ml-[1120px]'>CATEGORY 4</div> */}
                        <div className='flex flex-row '>
                        
                            <div className="txt">
                                <div onClick={handleClass11to12ScienceJEE} className='text-[50px] tracking-[-3px] font-bold'>Class 11-12 JEE and NEET</div>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                            </div>

                            <div onClick={handleClass11to12ScienceJEE} className="img h-[300px] w-[60vw] bg-yellow-300 "></div>
                        </div>
                        
                    </div>


                </div>

                <div className="coursepage3 flex flex-col ">
                    <div className=' w-[100vw] p-[20px]'>
                        <div className='tracking-[10px] '>CATEGORY 4</div>
                        <div className='text-[50px] text-[#E94B35] mb-[40px] tracking-[-3px] font-bold '>Commerce Stream</div>
                        <div className='flex flex-row gap-[50px]'>
                            <div className="img h-[300px] w-[30vw] bg-yellow-300"></div>
                            <div className="txt">
                                <div className='text-[50px] tracking-[-3px] font-bold'>Class 11-12 Boards and CUET</div>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                            </div>
                        </div>
                    </div>

                    <div className=" line w-[95vw] ml-[20px] h-[2px] bg-gray-400 "></div>

                    <div className=' w-[100vw] p-[20px]'>
                    {/* <div className='tracking-[10px] mb-[40px] ml-[1120px]'>CATEGORY 4</div> */}
                        <div className='flex flex-row '>
                        
                            <div className="txt">
                                <div className='text-[50px] tracking-[-3px] font-bold'>Class 11-12 JEE and NEET</div>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                            </div>

                            <div className="img h-[300px] w-[60vw] bg-yellow-300 "></div>
                        </div>
                        
                    </div>


                </div>

                <div className="coursepage4 flex flex-col ">
                    <div className=' w-[100vw] p-[20px]'>
                        <div className='tracking-[10px] '>CATEGORY 5</div>
                        <div className='text-[50px] text-[#E94B35] mb-[40px] tracking-[-3px] font-bold '>Humanities Stream</div>
                        <div className='flex flex-row gap-[50px]'>
                            <div className="img h-[300px] w-[30vw] bg-yellow-300"></div>
                            <div className="txt">
                                <div className='text-[50px] tracking-[-3px] font-bold'>Class 11-12 Boards and CUET</div>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                            </div>
                        </div>
                    </div>

                    <div className=" line w-[95vw] ml-[20px] h-[2px] bg-gray-400 "></div>

                    <div className=' w-[100vw] p-[20px]'>
                    {/* <div className='tracking-[10px] mb-[40px] ml-[1120px]'>CATEGORY 4</div> */}
                        <div className='flex flex-row '>
                        
                            <div className="txt">
                                <div className='text-[50px] tracking-[-3px] font-bold'>Class 11-12 JEE and NEET</div>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, cumque</div>
                            </div>

                            <div className="img h-[300px] w-[60vw] bg-yellow-300 "></div>
                        </div>
                        
                    </div>


                </div>

            </div>
        </>
    )
}

export default courses 