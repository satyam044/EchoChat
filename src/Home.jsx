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
        <div className='w-full h-[100dvh] flex relative'>
            <h4 className='h-full w-full text-9xl z-0 text-[#ffffff0d] font-extrabold absolute flex justify-center items-center'>EchoChat</h4>
            <div className='w-[50%] pl-20 flex flex-col justify-center items-start z-20'>
                <h2 className='text-4xl'>Welcome To <span className='text-[#71e3fa] text-5xl font-extrabold'>EchoChat,</span></h2>
                <p className='text-4xl font-light my-3'>Unleash the power of Fast, secure, and efficient language automation for the real world.</p>
                <button className='my-4 px-4 py-2 cursor-pointer flex items-center border-2 bg-white text-black border-white rounded-2xl hover:bg-transparent hover:text-white'>Get Started <FaAngleRight /></button>
            </div>
            <div onMouseEnter={handleimgHover} onMouseLeave={handleimgHover} className='w-[50%] z-20 relative flex justify-center items-center'>
                {imgHover && <div className="absolute top-[15%] left-[15%] bg-[#fefeff] text-black p-2 rounded-t-2xl rounded-bl-2xl">Hello, I'm Echo!!</div>}
                <img src={botImg} className={`w-[80%] h-[80%] object-contain relative ${imgHover && "-top-4"}`} />
            </div>
            <div className='wrapper w-full z-50 p-6 flex gap-10 whitespace-nowrap absolute bottom-16 border-t-2 border-b-2 -rotate-2'>
                <div className='w-full relative flex items-center'>
                    <div className='slide item1 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaGoogle />Google</div>
                    <div className='slide item2 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaAmazon />Amazon</div>
                    <div className='slide item3 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaWordpress />Wordpress</div>
                    <div className='slide item4 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaShopify />Shopify</div>
                    <div className='slide item5 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><SiDell />Dell</div>
                    <div className='slide item6 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaGoogle />Google</div>
                    <div className='slide item7 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaAmazon />Amazon</div>
                    <div className='slide item8 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaWordpress />Wordpress</div>
                    <div className='slide item9 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><FaShopify />Shopify</div>
                    <div className='slide item10 cursor-pointer absolute left-[120%] flex items-center gap-2 text-2xl'><SiDell />Dell</div>
                </div>
            </div>
        </div>
    )
}

export default Home