import React, { useContext, useEffect, useState } from 'react';
import {assets} from '../../assets/assets';
import { Context } from '../../Context/Context';
import { IoBulbOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

const Hero = (props) => {

    const [ theme, setTheme ] = useState(null);


    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            setTheme('dark');
        }
        else{
            setTheme('light')
        }
    },[])

    useEffect(() => {
        if (theme === "dark") { 
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () =>{
        setTheme( theme === "dark"? "light": "dark");
    }

    const {onSent, recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);

    return (
        <div className=' flex-1 min-h-full bg-white relative dark:bg-gray-900 h-screen'>
            <div className=' flex items-center justify-between text-xl  p-5 text-gray-600'>
                <h1 className=' dark:text-white'>Gemini</h1>
                    <div className=' flex'>
                    <button className=' leading-9 text-xl rounded-full m-1' title="Theme Switch" onClick={handleThemeSwitch}>
                        {theme === "dark" ? <MdOutlineWbSunny className='w-7 h-7 text-white mr-4' />: <MdDarkMode  className='w-7 h-7 mr-4' />}
                    </button>
                    <img src={assets.user_icon} alt="" className=' w-12 rounded-full' />
                    </div>
            </div>
            <div className=' max-w-[900px] m-auto'>
                {!showResult ? <>
                    <div className='  mx-0 text-5xl font-semibold p-5 '>
                    <p><span className='bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent '>Hello ,Dev.</span></p>
                    <p className=' text-gray-500 mt-2'>How can I help you today ?</p>
                </div>
                <div className=' flex gap-7 px-5 '>
                    <div className=' h-48 p-5 bg-slate-100 dark:bg-gray-800  rounded-lg relative cursor-pointer hover:bg-slate-200'>
                        <p className=' dark:text-white'>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" className=' w-8 p-1 absolute bg-white dark:bg-gray-700 rounded-2xl bottom-2 right-2 ' />
                    </div>
                    <div  className=' h-48 p-5 bg-slate-100 dark:bg-gray-800 rounded-lg relative cursor-pointer hover:bg-slate-200'>
                        <p className=' dark:text-white'>Briefly summarize this concept: urban planning</p>
                        <IoBulbOutline className='  w-8 h-8 p-1 absolute bg-white  dark:bg-gray-700  bottom-2 right-2 rounded-full '  />
                    </div>
                    <div  className=' h-48 p-5 bg-slate-100 dark:bg-gray-800  rounded-lg relative cursor-pointer hover:bg-slate-200'>
                        <p className=' dark:text-white'>Brainstorm team bonding activities for our work retreat</p>
                        <IoChatboxOutline className='  w-8 h-8 p-1 absolute bg-white  dark:bg-gray-700  bottom-2 right-2 rounded-full ' />
                    </div>
                    <div  className=' h-48 p-5 bg-slate-100 dark:bg-gray-800  rounded-lg relative cursor-pointer hover:bg-slate-200'>
                        <p className=' dark:text-white'>Improve the readability of the following code</p>
                        <FaCode  className='  w-8 h-8 p-1 absolute bg-white  dark:bg-gray-700  bottom-2 right-2 rounded-full ' />
                    </div>
                </div>

                </>
                :<div className=' py-0 px-3 custom-max-height overflow-y-scroll custom-scrollbar'>
                    <div className=' my-10 mx-0 flex items-center gap-5'>
                        <img src={assets.user_icon} alt="" className=' w-10 rounded-full' />
                        <p className=' dark:text-white'>{recentPrompt}</p>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={assets.gemini_icon} alt=""  className='w-10'/>
                        {loading ? <div className=' w-full flex flex-col gap-2'>
                            <hr className=' rounded border-none bg-gradient-to-r from-blue-200 via-white to-blue-200 h-5 custom-bg-size custom-animation-loader' />
                            <hr className=' rounded border-none bg-gradient-to-r from-blue-200 via-white to-blue-200 h-5 custom-bg-size custom-animation-loader' />
                            <hr className=' rounded border-none bg-gradient-to-r from-blue-200 via-white to-blue-200 h-5 custom-bg-size custom-animation-loader '  />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}} className=' leading-5 dark:text-white'></p>
                        }
                        
                    </div>
                </div>
                }
                

                <div className=' absolute bottom-0 py-0 px-2 m-auto '>
                    <div className='flex items-center justify-between gap-5 bg-slate-100 p-2 dark:bg-gray-800   rounded-full  '>
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' className=' dark:text-white flex-1 bg-transparent  border-none outline-none p-4 text-sm' />
                        <div className='flex gap-5 px-4 cursor-pointer'>
                            <IoImageOutline  className=' w-5 h-5' />
                            <IoMdMic  className=' w-5 h-5' />
                            <IoMdSend onClick={()=>onSent()}  className=' w-5 h-5' />
                        </div>
                    </div>
                    <p className='text-sm text-gray-500 '>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>

            </div>
        </div>
    )
}

export default Hero
