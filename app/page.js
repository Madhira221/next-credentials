import React from 'react'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const HomePage = async() => {
  const session = await auth()

  if(!session){
    return redirect('/login')
  }
  return (
    <div>
      <h1 className='text-3xl font-bold'>Welcome to Next Auth credentials authentication</h1>
      <Link href='/api/auth/signout' className='px-5 py-2 rounded-md bg-rose-500 text-white'>Logout</Link>
    </div>
  )
}

export default HomePage