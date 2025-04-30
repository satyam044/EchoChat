import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaRobot, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const HomeL = () => {
    const questions = [
        "What's your name?",
        "What's a wild app idea you've always wanted to build?",
        "If you could automate one boring task in your life, what would it be?",
        "Imagine you had an AI assistant — what would you make it do first?",
        "What kind of problem do you wish technology could solve for you today?",
        "What's the weirdest app you can think of that might actually work?",
        "If your fridge could talk, what feature should it have?",
        "You have a week off and unlimited dev resources. What do you build?",
        "If your browser history became a startup idea — what would it be?",
        "What feature should absolutely exist in a messaging app but doesn't?",
    ];

    const [btnClick, setBtnClick] = useState(false);
    const [delay, setDelay] = useState(false);
    const [name, setName] = useState("");
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let interval;
        if (delay && currentQIndex < questions.length) {
            const fullText = questions[currentQIndex];
            let charIndex = 0;
            setTypedText("");
            interval = setInterval(() => {
                if (charIndex < fullText.length) {
                    setTypedText(fullText.substring(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 50);
        }
        return () => clearInterval(interval);
    }, [delay, currentQIndex]);

    const handleBtnClick = () => {
        setBtnClick(true);
        setTimeout(() => {
            setDelay(true);
        }, 2000);
    };

    const handleNext = () => {
        if (currentQIndex < questions.length) {
            if (userResponses.length === 0) {
                setName(inputValue.trim());
            }
            if (inputValue.trim() !== "") {
                setUserResponses(prev => [...prev, inputValue]);
                setInputValue("");
                setCurrentQIndex(prev => prev + 1);
                setTypedText("");
                setDelay(false);
                setTimeout(() => {
                    setDelay(true);
                }, 1500);
            }
        }
    };

    return (
        <>
            <div className='homeL w-[50%] pl-20 pt-20 flex flex-col items-start z-20'>
                {<h2 className='text-3xl font-semibold'>{!btnClick && "Welcome To"}<span className='text-[#0095f0] text-5xl font-extrabold'> EchoChat,</span></h2>}
                {!btnClick ? (
                    <p className='text-2xl font-extralight mt-2 mb-6'>Unleash the power of Fast, secure, and efficient language automation for the real world.</p>
                ) : (
                    <>
                        {!delay ? (
                            <div className='w-full font-extralight flex items-center gap-2 mt-2 mb-4'>
                                <FaRobot className='robotSVG text-2xl' />
                                <p className='botMsg w-full overflow-hidden'>Thinking...</p>
                            </div>
                        ) : (
                            currentQIndex < questions.length ? (
                                <p
                                    className='w-full mt-2 mb-4 text-[1.5rem] font-extralight overflow-hidden'
                                    
                                    wrap="soft"
                                >{typedText}</p>
                            ) : (
                                <p className='botMsg w-full mt-2 mb-4 text-[1.5rem] font-light italic overflow-hidden'>
                                    Thanks {name || "friend"}! That was a fun chat 🚀
                                </p>
                            )
                        )}
                        {currentQIndex < questions.length && (
                            <>
                                <textarea
                                    name="userprompt"
                                    rows={3}
                                    cols={40}
                                    placeholder='Type your answer...'
                                    className='w-full mb-6 outline-none capitalize'
                                    onChange={e => setInputValue(e.target.value)}
                                    value={inputValue}
                                />
                                <button onClick={handleNext} className='px-4 py-2 cursor-pointer flex items-center border-2 bg-transparent text-white border-white rounded-2xl hover:bg-white hover:text-black'>
                                    Submit
                                </button>
                            </>
                        )}
                    </>
                )}
                {!btnClick && (
                    <button onClick={handleBtnClick} className='my-4 px-4 py-2 cursor-pointer flex items-center border-2 bg-white text-black border-white rounded-2xl hover:bg-transparent hover:text-white'>
                        Start A Chat <FaAngleRight />
                    </button>
                )}
                <div className='mt-8 text-2xl flex gap-8'>
                    <FaYoutube className='cursor-pointer hover:text-[#0095f0]' />
                    <FaInstagram className='cursor-pointer hover:text-[#0095f0]' />
                    <FaFacebook className='cursor-pointer hover:text-[#0095f0]' />
                    <FaTwitter className='cursor-pointer hover:text-[#0095f0]' />
                </div>
            </div>
        </>
    )
}

export default HomeL
