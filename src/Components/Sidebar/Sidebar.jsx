import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";

const Sidebar = (props) => {
  const [extened, setExtended] = useState(false);
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

  const  loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className=" min-h-screen inline-flex flex-col justify-between bg-slate-100 dark:bg-gray-800 py-6 px-4 ">
      <div>
      <FiMenu  onClick={() => setExtended((prev) => !prev)} className=" w-6 h-6 dark:text-gray-500 block ml-2 cursor-pointer" />
  
        <div onClick={()=> newChat()} className=" mt-11 inline-flex items-center gap-2 py-3 px-4 bg-slate-200 dark:bg-gray-700 rounded-full text-sm  text-gray-500 cursor-pointer">
          <img src={assets.plus_icon} alt="" className=" w-4" />
          {extened ? <p>New chat</p> : null}
        </div>

        {extened ? (
          <div className=" flex flex-col">
            <p className=" mt-5 mb-3 dark:text-white" >Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=> loadPrompt(item)} className=" flex items-center gap-2 p-3 pr-10  rounded-full text-gray-500 cursor-pointer hover:bg-slate-200">
                  <img src={assets.message_icon} alt="" className=" w-5" />
                  <p >{item.slice(0,18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div>
        <div>
          <div className=" flex items-center gap-2 p-2 pr-10  rounded-full text-gray-500 cursor-pointer hover:bg-slate-200">
            <img src={assets.question_icon} alt="" className=" w-5" />
            {extened ? <p className="dark:text-white">Help</p> : null}
          </div>
          <div className=" flex items-center gap-2 p-2 pr-10  rounded-full text-gray-500 cursor-pointer hover:bg-slate-200 hover:dark:text-gray-500">
            <PiClockCounterClockwiseBold className=" w-5 h-5"/>
            {extened ? <p className="dark:text-white">Activities</p> : null}
          </div>
          <div className=" flex items-center gap-2 p-2 pr-10  rounded-full text-gray-500 cursor-pointer hover:bg-slate-200">
            <img src={assets.setting_icon} alt="" className=" w-5" />
            {extened ? <p className="dark:text-white">Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
