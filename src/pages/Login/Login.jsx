import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import * as message from "../../components/Message/Message";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const [hidden, setHidden] = useState(true)

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInput((preState) => ({
      ...preState,
      [name]: value
    }))
  }

  const loginSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:2077/login', input);
      if (response?.data.errCode !== 200) {
        message.error(response.data.message)
      } else {
        message.success(response.data.message)
        sessionStorage.setItem('user', response?.data.account)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    await loginSubmit()
  }

  return (
    <div className="bg-[url('/public/images/Login/bg-login.jpeg')] h-screen w-screen bg-cover bg-center bg-no-repeat ">
      <div className='flex justify-center items-center h-full font-semibold'>
        <div className='w-[520px] h-[746px] bg-[#353434] flex flex-col gap-[31px] items-center justify-center rounded-xl  '>

          <div className='flex items-center flex-col gap-3 '>
            <h1 className='text-4xl  text-white'>Login</h1>
            <h1 className='text-xl text-white'>You can use your app or account to login</h1>
          </div>

          <div className='w-[378px] text-base text-white flex flex-col gap-3'>
            <div className='w-full p-[10px] bg-[#747474] rounded-md'>
              <input className='w-full border-none outline-none bg-transparent opacity-100' placeholder='Enter your email' type='email' name='email' onChange={handleOnChange} />
            </div>

            <div className='w-full p-[10px] bg-[#747474] rounded-md flex items-center'>
              <input className='w-full border-none outline-none bg-transparent opacity-100' placeholder='Password' type={hidden ? 'password' : 'text'} name='password' onChange={handleOnChange} />
              {hidden ? <IoMdEyeOff size={26} className='cursor-pointer' onClick={() => setHidden(!hidden)} /> : <IoEye size={26} className='cursor-pointer' onClick={() => setHidden(!hidden)} />}
            </div>

            <div className='w-full p-[10px] bg-[#929292] rounded-md hover:bg-[#EA6016] cursor-pointer'>
              <input className='w-full border-none outline-none text-white opacity-100 uppercase bg-transparent cursor-pointer' type='submit' value={'Log in'} onClick={handleSubmit} />
            </div>
          </div>

          <div>
            <h1 className='text-[#EA6016] cursor-pointer hover:underline hover:font-extrabold text-base'>
              Forgot Password?
            </h1>
          </div>

          <div className='flex items-center gap-3'>
            <img src='https://raw.githubusercontent.com/Exorcist11/MangaSocial/main/public/images/Login/QR.png' alt="" className='w-[50px] h-[50px]' />
            <h1 className='text-[#EA6016] cursor-pointer hover:font-extrabold text-bases'>Scan QR Code to Login</h1>
          </div>

          <div className="relative flex py-5 items-center w-[378px]">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or Continue with</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>


          <div className='flex gap-1 cursor-pointer hover:font-extrabold text-bases'>
            <h1 className='text-[#747474]'>Don't have an account?</h1>
            <p className='text-[#EA6016] hover:underline' onClick={() => navigate('/sign-up')}>Sign up</p>
          </div>

        </div>
      </div>
    </div >
  )
}
