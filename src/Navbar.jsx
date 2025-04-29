import React from 'react'
import './App.css'
import { FaAngleRight } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='w-full m-auto px-20 py-4 flex justify-between items-center fixed top-0 z-50'>
        <h2 className='text-2xl font-extrabold'>EchoChat</h2>
        <button className='px-4 py-2 cursor-pointer flex items-center border-2 border-white rounded-2xl hover:bg-white hover:text-black'>Get Started <FaAngleRight /></button>
    </nav>
  )
}

export default Navbar