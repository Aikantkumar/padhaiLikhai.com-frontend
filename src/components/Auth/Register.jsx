import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Context } from '../../main'

const Register = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Context)
    // userName ,firstName ,lastName ,email ,dob ,gender,password
    const[firstName, setFirstName] = useState("")
    const[userName, setUserName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[dob, setDob] = useState("")
    const[gender, setGender] = useState("")
    const[password, setPassword] = useState("")
    const[avatar, setAvatar] = useState(null);

    const navigate = useNavigate();

    const handleregister = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/register", {userName ,firstName ,lastName ,email ,dob ,gender,password, avatar},
                {
                    withCredentials: true,
                    headers:{"Content-Type": "application/json"},
                }
            );

            toast.success(response.data.message);
            setIsAuthenticated(true);
            navigate("/")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    } 


  return (
    <>
    <div className='bg-[#0D0D0D]'>

    
        <div className=' text-[#B8A895] flex flex-col items-center pt-[40px] w-[70vw] ml-[15vw]'>
            <div className='tracking-[15px] mb-[100px] '>register</div>
           <form onSubmit={handleregister}>
                <div className="image h-[150px]  flex flex-col justify-center items-center ">
                    <div className='h-[150px] w-[150px] bg-slate-500 rounded-full' type="image" value={avatar} onChange={(e) => setAvatar(e.target.files[0])}> image</div>
                </div>

                <div className='mb-[40px]'>
                    <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>USERNAME</div>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'/>
                </div>

                <div className='mb-[40px]'>
                    <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>FIRSTNAME</div>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'/>
                </div>
                <div className='mb-[40px]'>
                    <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>LASTNAME</div>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'/>
                </div>
                <div className='mb-[40px]'>
                    <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>EMAIL</div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'/>
                </div>
                <div className='mb-[40px]'>
                    <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>DATE OF BIRTH</div>
                    <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'/>
                </div>
                <div className='mb-[40px]'>
                    <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>GENDER</div>
                    <input type="text" value={firstName} onChange={(e) => setGender(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'/>
                </div>
                <div className='mb-[40px]'>
                    <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>SET PASSWORD</div>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'/>
                </div>

           </form>

           <div className='button bg-[#E94B35] w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>lets go</div>
        </div>

        <div className='text-[120px] text-[#B8A895] tracking-[-5px] font-semibold bottom-0 left'>
                <div className='mb-[-90px]'>Be</div>
                <div className='mb-[-50px]'>a part</div>
        </div>
    </div>        
    </>
  )
}

export default Register