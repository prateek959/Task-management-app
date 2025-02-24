import React from 'react'
import Sidebar from '../components/Home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex h-screen gap-4 p-2'>
        <div className='w-1/6 border border-gray-500 rounded-xl p-5 flex flex-col justify-between'>
        <Sidebar/>
        </div>
        <div className='w-5/6 border border-gray-500 rounded-xl p-5'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Home