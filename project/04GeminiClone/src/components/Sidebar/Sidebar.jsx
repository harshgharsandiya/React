import './Sidebar.css'
import { assets } from '../../assets/assets';
import { useState } from 'react';

function Sidebar() {

    const [extended, setExtended] = useState(true);

  return (
    <div className='sidebar'>
      <div className="top">
        <img
            className='menu' 
            src={assets.menu_icon} alt="" 
            onClick={() => setExtended(prev => !prev)}
        />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chats</p> : null}
        </div>

        {extended ? 
        <div className="recent">
            <p className="recent-title">
                Recent
            </p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is react ...</p>
            </div>
        </div>
        : null}

      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended ?   <p>Help</p>: null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p>: null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}


export default Sidebar
