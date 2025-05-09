import React from 'react'
import img1 from "../../public/Assets/about1.jpg"
import img2 from "../../public/Assets/about2.avif"
import img3 from "../../public/Assets/about3.png"
import img4 from "../../public/Assets/about4.avif"
import { FaAngleRight } from 'react-icons/fa'

const ImgSec = () => {
  return (
    <div className='about py-20 w-full border-y-8 border-black'>
      <h1 className='px-4 text-4xl text-center max-md:text-2xl'><span className='text-[#0095f0] text-5xl font-bold max-md:text-3xl'>EchoChat: </span>"The Future of <br />Interactive Conversations"</h1>
      <div className='w-full mt-10 flex justify-center gap-4'>
        <div className='w-[10%] hover:scale-105 bg-[#0095f0]'></div>
        <img className='w-[20%] cursor-pointer hover:scale-105 object-cover' src={img2} alt="" />
        <img className='w-[20%] cursor-pointer hover:scale-105 object-cover' src={img1} alt="" />
        <img className='w-[20%] cursor-pointer hover:scale-105 object-cover' src={img3} alt="" />
        <img className='w-[20%] cursor-pointer hover:scale-105 object-cover' src={img4} alt="" />
        <div className='w-[10%] hover:scale-105 bg-[#0095f0]'></div>
      </div>
      <button className='mt-20 mx-auto px-10 py-2 cursor-pointer flex items-center border-2 bg-white text-black transition-all border-white rounded-2xl hover:bg-transparent hover:text-white hover:gap-5'>
        Start A Chat <FaAngleRight />
      </button>
    </div>
  )
}

export default ImgSec