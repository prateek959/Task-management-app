import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='w-2/6 p-4 rounded bg-gray-800'>
        <div className='text-2xl font-semibold'>Signup</div>
        <input type="text" placeholder='username' className='bg-gray-600 w-full px-3 py-2 my-3 rounded' />
        <input type="email" placeholder='email' name='xyz@example.com' className='bg-gray-600 w-full px-3 py-2 my-3 rounded' required />
        <input type="password" placeholder='password' name='password' className='bg-gray-600 w-full px-3 py-2 my-3 rounded' />
        <div className='w-full flex items-center justify-between'>
      <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded'>Signup</button>
      <Link to='/login' className='text-gray-400 hover:text-gray-200'>Already having an account? LogIn Here</Link>
      </div>
      </div>
    </div>
  )
}

export default Signup