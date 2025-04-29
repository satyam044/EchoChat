import React, { useState } from 'react'
import { FaAngleRight, FaRobot } from 'react-icons/fa'

const HomeL = () => {
    const questions = [
        "What's your name?",
        "What field are you working in? (e.g., Finance, Healthcare)",
        "What type of documents do you deal with daily?",
        "Do you prefer on-device or cloud-based tools?",
        "How important is privacy to you on a scale of 1–10?"
    ];
    const [btnClick, setBtnClick] = useState(false);
    const [delay, setDelay] = useState(false);
    const [name, setName] = useState("");
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleBtnClick = () => {
        setBtnClick(true);
        setTimeout(() => {
            setDelay(true);
        }, 2000);
        setDelay(false);
    }

    const handleNext = () => {
        if (userResponses.length == 0) {
            setName(inputValue.trim());
        }
        if (inputValue.trim() !== "") {
            setUserResponses([...userResponses, inputValue]);
            setInputValue("");
            setCurrentQIndex(prev => prev + 1);
            setTimeout(() => {
                setDelay(true);
            }, Math.floor(Math.random() * (5000 - 2000) + 2000));
            setDelay(false);
        }
    }

    return (
        <>
            <div className='homeL w-[50%] pl-20 pt-20 flex flex-col items-start z-20'>
                {<h2 className='text-3xl font-semibold'>{!btnClick && "Welcome To"}<span className='text-[#0095f0] text-5xl font-extrabold'> EchoChat,</span></h2>}
                {!btnClick ?
                    <p className='text-2xl font-extralight mt-2 mb-6'>Unleash the power of Fast, secure, and efficient language automation for the real world.</p>
                    :
                    <>
                        {!delay ? <div className='w-full font-extralight flex items-center gap-2 mt-2 mb-4'><FaRobot className='robotSVG text-2xl' />
                            <p className='botMsg w-full overflow-hidden'>Thinking...</p>
                        </div>
                            : <p className='botMsg w-full mt-2 mb-4 text-nowrap text-2xl font-extralight overflow-hidden'><span className='font-semibold text-[1.2rem] capitalize'>{name && name + ", "}</span>{questions[currentQIndex]}</p>
                        }
                        <textarea name="userprompt" rows={3} cols={40} placeholder='Type your answer...'
                            className='w-full mb-6 outline-none'
                            onChange={e => setInputValue(e.target.value)}
                            value={inputValue} />
                        <button onClick={handleNext} className='px-4 py-2 cursor-pointer flex items-center border-2 bg-transparent text-white border-white rounded-2xl hover:bg-white hover:text-black'>Submit</button>
                    </>
                }
                {!btnClick && <button onClick={handleBtnClick} className='my-4 px-4 py-2 cursor-pointer flex items-center border-2 bg-white text-black border-white rounded-2xl hover:bg-transparent hover:text-white'>Get Started <FaAngleRight /></button>}
            </div>
        </>
    )
}

export default HomeL