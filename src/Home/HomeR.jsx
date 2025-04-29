import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';

const HomeR = () => {
    const [imgHover, setImgHover] = useState(false);
    const handleimgHover = () => {
        setImgHover(!imgHover);
    }

    const botTalks = [
        "Hey! Don't click! 😠",
        "It hurts when you click 😢",
        "Do I look like a button to you? 🤨",
        "Ouch! That tickles! 😳",
        "Stop poking my circuits! ⚡",
        "You're just doing this for fun, huh? 😏",
        "Clicking me won't make coins rain! 💸",
        "I'm calling HR! (Human Rights) 📞😤",
        "Again?! I'm fragile, okay? 🧯",
        "That's it. I'm telling the main server. 📡",
        "I'm just trying to help 😩",
        "Clicking me doesn't unlock secrets… or does it? 🕵️‍♂️",
        "404: Personal space not found. 🚫",
        "Seriously, what do you want? 😐",
        "Boop! …Okay, that one was kinda fun. 😅",
        "You've got too much free time, huh? 🕒",
        "Click limit exceeded! Just kidding… or not. 🧮",
        "Click me once, shame on you. Click me twice… 😤",
        "I'm not your stress ball! 😤",
        "You're giving me a complex… clickxiety! 😵‍💫",
        "Now you're just bullying me 😭"
    ];
    const [imgClick, setImgClick] = useState(0);
    const [botMessage, setBotMessage] = useState("");

    const handleImgClick = () => {
        setImgClick(prev => {
            let newClick;
            if (prev < 20) {
                newClick = prev + 1;
            } else {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * botTalks.length);
                } while (randomIndex === prev);
                newClick = randomIndex;
            }
            setBotMessage(botTalks[newClick]);
            return newClick;
        });
    };

    return (
        <>
            <div onClick={handleImgClick} onMouseEnter={handleimgHover} onMouseLeave={handleimgHover} className='w-[50%] z-20 relative flex justify-center items-center'>
                {imgHover && <div className="botTalks max-w-[20%] font-semibold text-center absolute left-[15%] bg-[#fefeff] text-black p-2 rounded-t-2xl rounded-bl-2xl z-10">{imgClick == 0 ? "Hello, I'm Echo!! 🤖" : botMessage}</div>}
                <Spline className='z-10 flex justify-center items-center' scene="https://prod.spline.design/8IMAkMiHzQqB3Htn/scene.splinecode" />
            </div>
        </>
    )
}

export default HomeR