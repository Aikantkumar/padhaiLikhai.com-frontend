import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { Context } from '../../main'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// import {useAuth0} from "@auth0/auth0-react"
const clientId = "223995104521-3r1d1pj0tqb39f0ea8k2m9c55mln3oo5.apps.googleusercontent.com"

const Login = () => {

    //  const {user, loginWithRedirect} = useAuth0()


    const { isAuthenticated, setIsAuthenticated } = useContext(Context)
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const navigateTo = useNavigate()

    // ******************************************************for Oauth google authentication
    const onSuccess = (response) => {
        console.log('Login Success: ', response);
    };

    const onFailure = (response) => {
        console.log('Login Failed: ', response);
    };
    // *********************************************************for Oauth google authentication


    const handlelogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/login", { email, userName, password },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            )

            // the data for further use(we will use this "user" data when we will be needing to show the details of the user like the userId or profilepic):
            const data = await response.json();
            
            localStorage.setItem('accessToken', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            localStorage.setItem('user', JSON.stringify(data.user))

            toast.success(response.data.message)
            setIsAuthenticated(true);
            navigateTo("/")

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <>
            <div className='bg-[#0D0D0D]'>


                <div className='text-[#B8A895] flex flex-col items-center pt-[40px] w-[70vw] ml-[15vw]'>
                    <div className='tracking-[15px] mb-[100px]'>login</div>
                    <form onSubmit={handlelogin}>
                        <div className='mb-[40px]'>
                            <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>EMAIL</div>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                        </div>

                        <div className='mb-[40px]'>
                            <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>USERNAME</div>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                        </div>

                        <div className='mb-[40px]'>
                            <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>PASSWORD</div>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                        </div>


                    </form>

                    <div className='button bg-[#E94B35] w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>lets go</div>
                </div>

                <div className='flex flex-row justify-center items-center pt-[10px]'>
                    <div className='w-[330px] h-[1px] bg-slate-500'></div>
                    <div className='text-slate-500'>&nbsp;or&nbsp;</div>
                    <div className='w-[310px] h-[1px] bg-slate-500'></div>
                </div>

                <div className='flex items-center justify-center'>
                    <GoogleOAuthProvider clientId={clientId} >
                        <div className="w-[200px] h-[50px] pt-[10px] ml-[15px]">

                            <GoogleLogin
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                            />
                        </div>
                    </GoogleOAuthProvider>
                </div>

                <div className='text-[120px] text-[#B8A895] tracking-[-5px] font-semibold bottom-0 left'>
                    <div className='mb-[-90px]'>Be</div>
                    <div className='mb-[-50px]'>a part</div>
                </div>
            </div>
        </>
    )
}

export default Login