'use client'
import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');


      const router = useRouter()

      const loginHandler = async (e)=>{
            e.preventDefault();
            const loginDetails = {email, password}
            console.log(loginDetails);
            
            try {
              const response = await loginAction(loginDetails)
              if (response.success) {
                router.push('/')
              }else{
                setError('Login failed, please try again')
              }
            } catch (error) {
              setError(error.message)
            }
      }
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-5'>
      <h1 className='text-3xl font-bold'>Login Form</h1>
      <form action="" onSubmit={loginHandler} className='border border-black p-6 rounded-md flex flex-col gap-2 bg-gray-200'>
      {error && <p className='text-rose-600 text-center'>{error}</p>}
            <h3>Email</h3>
            <input type="email" className='border border-gray-600 rounded-md p-1'name='email' onChange={(e)=>setEmail(e.target.value)}/>

            <h3>Password</h3>
            <input type="password" className='border border-gray-600 rounded-md p-1' name='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='border border-gray-600 bg-blue-600 text-white p-2 rounded-md mt-3'>Login</button>

            <Link href='/register'>Not Registered ? Sing Up</Link>
      </form>
    </div>
  )
}

export default LoginForm