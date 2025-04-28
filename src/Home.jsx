import React, { useState } from 'react'
import botImg from '../public/Assets/botimg.png'
import { FaAngleRight, FaGoogle, FaAmazon, FaWordpress, FaShopify, } from "react-icons/fa";
import { SiDell } from "react-icons/si";

const Home = () => {
    const [imgHover, setImgHover] = useState(false);
    const handleimgHover = () => {
        setImgHover(!imgHover);
    }
    return (
        <div className='w-full h-full flex relative'>
            <h4 className='h-full w-full text-9xl z-0 text-[#ffffff0d] font-extrabold absolute flex justify-center items-center'>EchoChat</h4>
            <div className='w-[50%] pl-20 flex flex-col justify-center items-start z-20'>
                <h2 className='text-4xl'>Welcome To <span className='text-[#71e3fa] text-5xl font-bold'>EchoChat</span></h2>
                <p className='text-4xl font-light my-3'>Unleash the power of Fast, secure, and efficient language automation for the real world.</p>
                <button className='my-4 px-4 py-2 cursor-pointer flex items-center border-2 bg-white text-black border-white rounded-2xl hover:bg-transparent hover:text-white'>Get Started <FaAngleRight /></button>
            </div>
            <div className='w-[50%] z-20 relative flex justify-center items-center'>
                {imgHover && <div className="absolute top-[15%] left-[15%] bg-white text-black p-2 rounded-t-2xl rounded-bl-2xl">Hello, I'm Echo!!</div>}
                <img src={botImg} className={`w-[80%] h-[80%] object-contain relative ${imgHover && "-top-4"}`} onMouseEnter={handleimgHover} onMouseLeave={handleimgHover} />
            </div>
            <div className='w-full z-0 p-4 flex gap-10 whitespace-nowrap absolute bottom-16 border-t-2 border-b-2 -rotate-2'>
                <div className='slide w-full flex items-center gap-10'>
                    <div className='flex items-center gap-2 text-2xl'><FaGoogle />Google</div>
                    <div className='flex items-center gap-2 text-2xl'><FaAmazon />Amazon</div>
                    <div className='flex items-center gap-2 text-2xl'><FaWordpress />Wordpress</div>
                    <div className='flex items-center gap-2 text-2xl'><FaShopify />Shopify</div>
                    <div className='flex items-center gap-2 text-2xl'><SiDell />Dell</div>
                </div>
                <div className='slide w-full flex items-center gap-10'>
                    <div className='flex items-center gap-2 text-2xl'><FaGoogle />Google</div>
                    <div className='flex items-center gap-2 text-2xl'><FaAmazon />Amazon</div>
                    <div className='flex items-center gap-2 text-2xl'><FaWordpress />Wordpress</div>
                    <div className='flex items-center gap-2 text-2xl'><FaShopify />Shopify</div>
                    <div className='flex items-center gap-2 text-2xl'><SiDell />Dell</div>
                </div>
                <div className='slide w-full flex items-center gap-10'>
                    <div className='flex items-center gap-2 text-2xl'><FaGoogle />Google</div>
                    <div className='flex items-center gap-2 text-2xl'><FaAmazon />Amazon</div>
                    <div className='flex items-center gap-2 text-2xl'><FaWordpress />Wordpress</div>
                    <div className='flex items-center gap-2 text-2xl'><FaShopify />Shopify</div>
                    <div className='flex items-center gap-2 text-2xl'><SiDell />Dell</div>
                </div>
            </div>
        </div>
    )
}

export default Home