import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'

const HomeL = () => {
    const questions = [
        "What's your name?",
        "What field are you working in? (e.g., Finance, Healthcare)",
        "What type of documents do you deal with daily?",
        "Do you prefer on-device or cloud-based tools?",
        "How important is privacy to you on a scale of 1–10?"
    ];
    const [btnClick, setBtnClick] = useState(false);
    const handleBtnClick = () => {
        setBtnClick(true);
    }
    return (
        <>
            <div className='homeL w-[50%] pl-20 pt-20 flex flex-col items-start z-20'>
                {<h2 className='text-3xl font-semibold'>{!btnClick && "Welcome To"}<span className='text-[#0095f0] text-5xl font-extrabold'> EchoChat,</span></h2>}
                {!btnClick ?
                    <p className='text-2xl font-extralight mt-2 mb-6'>Unleash the power of Fast, secure, and efficient language automation for the real world.</p>
                    :
                    <textarea name="postContent" rows={4} cols={40} placeholder='Type your answer...'
                    className='w-full mt-2 mb-6'
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleNext()} />
                }
                {!btnClick && <button onClick={handleBtnClick} className='my-4 px-4 py-2 cursor-pointer flex items-center border-2 bg-white text-black border-white rounded-2xl hover:bg-transparent hover:text-white'>Get Started <FaAngleRight /></button>}
            </div>
        </>
    )
}

export default HomeL