import React from 'react'
import './Home.css'
import HomeL from './HomeL';
import HomeR from './HomeR';
import { FaGoogle, FaAmazon, FaWordpress, FaShopify } from "react-icons/fa";
import { SiDell } from "react-icons/si";

const Home = () => {
    const sliderArray = [
        { svg: <FaGoogle />, name: "Google" },
        { svg: <FaAmazon />, name: "Amazon" },
        { svg: <FaWordpress />, name: "Wordpress" },
        { svg: <FaShopify />, name: "Shopify" },
        { svg: <SiDell />, name: "Dell" },
    ];

    return (
        <div className='Home w-full h-[100dvh] flex relative overflow-hidden'>
            <h4 className='h-full w-full text-9xl z-0 border-l-[20px] border-r-[20px] border-black text-transparent font-extrabold absolute flex justify-center items-center'>EchoChat</h4>
            <HomeL />
            <HomeR />
            <div className='wrapper w-full z-50 p-2 bg-gradient-to-r from-[#0d1e2a] to-[#0095f0] absolute bottom-16 border-t-2 border-b-2 -rotate-2 overflow-hidden'>
                <div className='slider flex gap-30 animate-scroll'>
                    {sliderArray.map((item, index) => (
                        <div key={index} className='flex items-center gap-2 text-2xl whitespace-nowrap'>
                            {item.svg} {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
