import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer w-[95%] mx-auto my-10 px-20 rounded-2xl bg-[#0095f0] max-md:px-5'>
            <div className='footerT py-20 flex justify-between items-end border-b-2 border-dashed max-md:flex-col-reverse max-md:items-start max-md:gap-4 max-md:py-4'>
                <div className="footerL w-full">
                    <h4 className='text-4xl font-extralight'>EchoChat.</h4>
                    <div className='w-full flex gap-10 mt-10 max-md:justify-between max-md:text-sm'>
                        <ul className='flex font-semibold flex-col gap-4'>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Features</li>
                        </ul>
                        <ul className='flex font-semibold flex-col gap-4'>
                            <li className='cursor-pointer'>Websites</li>
                            <li className='cursor-pointer'>Collections</li>
                            <li className='cursor-pointer'>Elements</li>
                        </ul>
                        <ul className='flex font-semibold flex-col gap-4'>
                            <li className='cursor-pointer'>FAQs</li>
                            <li className='cursor-pointer'>Academy</li>
                            <li className='cursor-pointer'>Market</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='font-extralight'>Got Any Project Idea?</p>
                    <h2 className='text-6xl font-light'>Let's talk</h2>
                </div>
            </div>
            <div className="footerB flex gap-1 justify-between items-end py-20 max-md:flex-col max-md:items-center max-md:gap-8">
                <ul className='flex font-light gap-6'>
                    <li className='cursor-pointer'>Cookies Policy</li>
                    <li className='cursor-pointer'>Legal Terms</li>
                    <li className='cursor-pointer'>Privacy Policy</li>
                </ul>
                <div className='flex text-2xl gap-8'>
                    <FaYoutube className='cursor-pointer hover:text-[#0d1e2a]' />
                    <FaInstagram className='cursor-pointer hover:text-[#0d1e2a]' />
                    <FaFacebook className='cursor-pointer hover:text-[#0d1e2a]' />
                    <FaTwitter className='cursor-pointer hover:text-[#0d1e2a]' />
                </div>
            </div>
            <p className='w-full p-4 border-t-2 text-center'>Copyright ©2025 All rights reserved</p>
        </div>
    )
}

export default Footer