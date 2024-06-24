import React, { useState } from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { useGemini } from '../../context/Context'


const Sidebar = () => {

  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat} = useGemini();

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    onSent(prompt);
  }


  return (
    <>
    
        <div className='sidebar'>
          <div className="top">
            <img
              onClick={() => setExtended(prev => !prev)}
              className='menu' src={assets.menu_icon} alt="" />

            <div 
            onClick={() => newChat()}
            className="new-chat">
              <img src={assets.plus_icon} alt="" />
              {extended && <p>New Chat</p>}
            </div>

            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompt.map((item,index) => (
                <div 
                onClick={() => loadPrompt(item)}
                className="recent-entry">
                <img src={assets.message_icon} alt="" />
                {extended && <p>{item.slice(0,18)}...</p>}
              </div>
              ))}
              
            </div>

          </div>

          <div className="bottom">
            <div className="bottom-item recent-entry">
              <img src={assets.question_icon} alt="" />
              {extended && <p>Help</p>}
            </div>

            <div className="bottom-item recent-entry">
              <img src={assets.history_icon} alt="" />
              {extended && <p>Activity</p>}
            </div>

            <div className="bottom-item recent-entry">
              <img src={assets.setting_icon} alt="" />
              {extended && <p>Settings</p>}
            </div>
          </div>
        </div>

    </>
  )
}

export default Sidebar