import React from 'react'

const PersonalProfile = () => {

  


  return (
    <>
      <div className='  bg-[#0D0D0D] flex flex-row gap-3 p-3 '>
        <div className=' w-[30vw]  bg-gray-800 rounded-[8px] flex flex-col items-center'>

          <div className='relative mb-[50px] '>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] left-[-10px] bg-white w-[350px] h-[180px] rounded-lg flex  justify-end p-[10px] items-end">
              <div className='right-[10px] absolute text-[10px] text-lg font-semibold'>Chats</div>
            </div>
          </div>

          <div className='relative mb-[50px]'>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] left-[-10px]    bg-white w-[350px] h-[180px] rounded-lg flex items-center justify-between p-[10px]">
              <div className='right-[10px] absolute text-[10px] text-lg font-semibold'>Chats</div>
            </div>
          </div>


          <div className='relative mb-[50px]'>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] left-[-10px]   bg-white w-[350px] h-[180px] rounded-lg flex items-center justify-between p-[10px]">
              <div className='right-[10px] absolute text-[10px] text-lg font-semibold'>Chats</div>
            </div>
          </div>


          <div className='relative mb-[50px]'>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] left-[-10px]   bg-white w-[350px] h-[180px] rounded-lg flex items-center justify-between p-[10px]">
              <div className='right-[10px] absolute text-[10px] text-lg font-semibold'>Chats</div>
            </div>
          </div>

          <div className='relative mb-[50px]'>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] left-[-10px]   bg-white w-[350px] h-[180px] rounded-lg flex items-center justify-between p-[10px]">
              <div className='right-[10px] absolute text-[10px] text-lg font-semibold'>Chats</div>
            </div>
          </div>

        </div>


        <div className='flex flex-col items-center  w-[40vw]  bg-gray-800 rounded-[8px] text-white'>

          <div className="profileimg h-[200px] w-[200px] rounded-full bg-white mt-[40px]"></div>
          <div className=' text-[30px] tracking-[6px] font-extralight'>@username</div>
          <div className="boxa text-[20px] w-[35vw] mt-[80px] font-extralight">
            <div className="name mt-[10px] mb-[10px] tracking-[-1px]">FullName</div>
            <div className='mt-[10px] mb-[10px]'>registered email</div>
            <div className='mt-[10px] mb-[10px]'>role</div>
            <div className='mt-[10px] mb-[10px]'>fields</div>
            <div className='mt-[10px] mb-[10px]'>specialisation</div>
            <div className='mt-[10px] mb-[10px]'>experience</div>
            <div className='mt-[10px] mb-[10px]'>qualifications</div>
            <div className='mt-[10px] mb-[10px]'>achievements</div>
            <div className='mt-[10px] mb-[10px]'>contact</div>
          </div>

        </div>


        <div className=' w-[30vw] h-[100vh] bg-gray-800 rounded-[8px] flex flex-col items-center'>
          <div className='relative mb-[50px]'>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] right-[-10px] bg-white w-[350px] h-[180px] rounded-lg flex items-center justify-between p-[10px]">
              <div className='left-[10px] absolute text-[10px] text-lg font-semibold'>Enrollments</div>
            </div>
          </div>

          <div className='relative mb-[50px]'>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] right-[-10px] bg-white w-[350px] h-[180px] rounded-lg flex items-center justify-between p-[10px]">
              <div className='left-[10px] absolute text-[10px] text-lg font-semibold'>My videos</div>
            </div>
          </div>

          <div className='relative mb-[50px]'>
            <div className="circle1 z-10 relative w-[150px] h-[150px] mt-[30px] bg-yellow-300 rounded-full"></div>
            <div className="whitebox absolute top-[15px] right-[-10px] bg-white w-[350px] h-[180px] rounded-lg flex items-center justify-between p-[10px]">
              <div className='left-[10px] absolute text-[10px] text-lg font-semibold'>Schedule Test/Classes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalProfile