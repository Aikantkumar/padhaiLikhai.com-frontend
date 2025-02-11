import React from 'react'

const Profiles = () => {
   return (
      <>
         <div className='h-[100vh] bg-[#0D0D0D] grid grid-cols-3 gap-5 p-5 '>
            <div className='relative text-white border-white border-[2px] h-[300px] bg-[#0D0D0D] rounded-[30px]'>
               <div className='h-[70px] bg-[#E94B35] top-0 relative rounded-t-[30px]'>
                  <div className='absolute text-[20px] tracking-[5px] right-[10px] bottom-0'>username</div>
               </div>
               <div className='h-[130px] w-[130px] z-10 top-[30px] left-[20px] absolute border-white border-[2px] rounded-full bg-gray-400'></div>
               <div className="text">
                  <div className='absolute tracking-[2px] text-[15px] font-semibold right-[10px]'>FULLNAME</div>
               </div>
            </div>

            <div className='relative text-white border-white border-[2px] h-[300px] bg-[#0D0D0D] rounded-[30px]'>
               <div className='h-[70px] bg-[#E94B35] top-0 relative rounded-t-[30px]'>
                  <div className='absolute text-[20px] tracking-[5px] right-[10px] bottom-0'>username</div>
               </div>
               <div className='h-[130px] w-[130px] z-10 top-[30px] left-[20px] absolute border-white border-[2px] rounded-full bg-gray-400'></div>
               <div className="text">
                  <div className='absolute tracking-[2px] text-[15px] font-semibold right-[10px]'>FULLNAME</div>
               </div>
            </div>


         </div>
      </>
   )
}

export default Profiles