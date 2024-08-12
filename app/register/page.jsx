'use client';

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterPage = () => {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const router = useRouter()

      const registerHandler = async(e)=>{
            e.preventDefault();
            const registerDetails = {username, email, password}
            console.log(registerDetails)
            
            try {
              await registerAction(registerDetails)
              router.push('/login')
              alert('User Registered successfully')
            } catch (error) {
              setError(error.message)
            }
      }

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-5'>
      <h1 className='text-3xl font-bold'>Register Form</h1>
      <form action="" className='border border-black p-5 rounded-md flex flex-col gap-2 bg-gray-200' onSubmit={registerHandler}>
        {error && <p className='text-rose-600 text-center'>{error}</p>}
            <h3>Username</h3>
            <input type="text" className='border border-gray-600 rounded-md p-1' name='username' onChange={(e)=>setUsername(e.target.value)}/>

            <h3>Email</h3>
            <input type="email" className='border border-gray-600 rounded-md p-1'name='email' onChange={(e)=>setEmail(e.target.value)}/>

            <h3>Password</h3>
            <input type="password" className='border border-gray-600 rounded-md p-1' name='password' onChange={(e)=>setPassword(e.target.value)}/>

            <button type='submit' className='border border-gray-600 bg-blue-600 text-white p-2 rounded-md mt-3'>Register</button>
            <Link href='/login'>Already Registered ? Login</Link>
      </form>
    </div>
  )
}

export default RegisterPage