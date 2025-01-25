import React, { useState } from 'react'

const RegisterTeacher = () => {

    const [fullName, setFullName] = useState("")
    const [field, setField] = useState("")
    const [specialisation, setSpecialisation] = useState("")
    const [experience, setExperience] = useState("")
    const [qualifications, setQualifications] = useState("")
    const [achievements, setAchievements] = useState("")
    const [contact, setContact] = useState("")

    const handleregisterteacher = () => {

    }

    const handletagbuttons = (e) => {        
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu')
        
        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('button')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' X'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"
        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
        
    }


    return (
        <div className='bg-[#0D0D0D]'>

            {/* fullName, field, specialisation, experience, qualifications, achievements, contact */}
            <div className=' text-[#B8A895] flex flex-col items-center pt-[40px] w-[70vw] ml-[15vw]'>
                <div className='tracking-[15px] mb-[100px] '>register as a teacher</div>
                <form onSubmit={handleregisterteacher}>


                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>FULLNAME</div>
                        <input type="text" value={fullName} onChange={(e) => setUserName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>

                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>FIELD</div>
                        <div id='input' value={field} onChange={(e) => setFirstName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'></div>
                        <div id='tags' className="items mt-[20px] bg-sky-300 h-[300px] overflow-scroll scroll-smooth">
                            <div className="class6 p-2"> {/*pl-[4px] pr-[4px] ml-[4px] mr-[4px]*/}
                                <div className='text-black tracking-[4px] font-normal'>Class 6</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons()} id='buttonbabu' className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Mathematics</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Science</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[160px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Social Science</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-English </div>
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                    
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Hindi</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>

                            <div className="class7 p-2"> {/*pl-[4px] pr-[4px] ml-[4px] mr-[4px]*/}
                                <div className='text-black tracking-[4px] font-normal'>Class 7</div>
                                <div className='flex flex-row gap-2 '>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Mathematics</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Science</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[160px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Social Science</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-English </div>
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                    
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Hindi</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Sanskrit</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Mathematics</div>
                                    
                                </div>
                            </div>

                            <div className="class8 p-2"> {/*pl-[4px] pr-[4px] ml-[4px] mr-[4px]*/}
                                <div className='text-black tracking-[4px] font-normal'>Class 8</div>
                                <div className='flex flex-row gap-2 '>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Mathematics</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Science</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[160px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Social Science</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-English </div>
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                    
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Hindi</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Sanskrit</div>
                                    <div className='bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold'>6th-Mathematics</div>
                                    
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>SPECIALISATION</div>
                        <input type="text" value={specialisation} onChange={(e) => setLastName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>EXPERIENCE</div>
                        <input type="text" value={experience} onChange={(e) => setEmail(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>QUALIFICATION</div>
                        <input type="text" value={qualifications} onChange={(e) => setDob(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>ACHIEVEMENTS</div>
                        <input type="text" value={achievements} onChange={(e) => setGender(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>CONTACT</div>
                        <input type="text" value={contact} onChange={(e) => setPassword(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>

                </form>

                <div className='button bg-[#E94B35] w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>lets go</div>
            </div>

            <div className='text-[120px] text-[#B8A895] tracking-[-5px] font-semibold bottom-0 left'>
                <div className='mb-[-90px]'>Be</div>
                <div className='mb-[-50px]'>a part</div>
            </div>
        </div>
    )
}

export default RegisterTeacher