import React from 'react'
import { CiChat1 } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { MdArrowOutward } from 'react-icons/md';

const Features = () => {
    return (
        <div className='features my-20 px-4'>
            <h2 className='w-max mx-auto px-10 py-4 text-4xl'>Our Features</h2>
            <div className='mx-auto my-10 px-10 grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] justify-center gap-10'>
                <div className='px-4 pt-4 pb-8 bg-blue-400 flex flex-col gap-4 rounded-2xl'>
                    <div className='flex justify-between cursor-pointer'>
                        <p className='relative hover:-top-1'>Explore Now</p>
                        <MdArrowOutward className='relative text-2xl hover:-top-1' />
                    </div>
                    <CiChat1  className='text-7xl' />
                    <h4 className='font-bold text-2xl'>Immersive 3D Bot Interaction</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias pariatur recusandae, dignissimos possimus eum voluptatem minima nisi cupiditate sunt.</p>
                </div>
                <div className='px-4 pt-4 pb-8 bg-blue-400 flex flex-col gap-4 rounded-2xl'>
                    <div className='flex justify-between cursor-pointer'>
                        <p className='relative hover:-top-1'>Explore Now</p>
                        <MdArrowOutward className='relative text-2xl hover:-top-1' />
                    </div>
                    <FaCode className='text-7xl' />
                    <h4 className='font-bold text-2xl'>Real-Time Dynamic Conversations</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias pariatur recusandae, dignissimos possimus eum voluptatem minima nisi cupiditate sunt.</p>
                </div>
                <div className='px-4 pt-4 pb-8 bg-blue-400 flex flex-col gap-4 rounded-2xl'>
                    <div className='flex justify-between cursor-pointer'>
                        <p className='relative hover:-top-1'>Explore Now</p>
                        <MdArrowOutward className='relative text-2xl hover:-top-1' />
                    </div>
                    <HiOutlineLightBulb className='text-7xl' />
                    <h4 className='font-bold text-2xl'>Genrative Ideas</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias pariatur recusandae, dignissimos possimus eum voluptatem minima nisi cupiditate sunt.</p>
                </div>
                <div className='px-4 pt-4 pb-8 bg-blue-400 flex flex-col gap-4 rounded-2xl'>
                    <div className='flex justify-between cursor-pointer'>
                        <p className='relative hover:-top-1'>Explore Now</p>
                        <MdArrowOutward className='relative text-2xl hover:-top-1' />
                    </div>
                    <BsGraphUpArrow  className='text-7xl' />
                    <h4 className='font-bold text-2xl'>Analytics And Insights</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias pariatur recusandae, dignissimos possimus eum voluptatem minima nisi cupiditate sunt.</p>
                </div>
            </div>
        </div>
    )
}

export default Features