import React, { useState } from 'react'
import './Chating.css'
import img from './img2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faVideo,
  faPaperclip,
  faFaceSmile,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
const Chating2 = () => {
  const [text, setText] = useState('Write Your Message Here...')

  return (
    <div className="chating_container">
      <div className="chating_top">
        <div className="chating_top_right">
          <img src={img} />
          <div>
            <h3>Ayesha</h3>
            <p>Online</p>
          </div>
        </div>
        <div className="chating_top_left">
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faVideo} />
        </div>
      </div>
      <hr className="chating_line" />
      <div className="chating_middle">Chating</div>
      <div className="Chating_bottom">
        <hr className="chating_line" />
        <div className="chating_sub_bottom">
          <div>
            <form>
              <input
                className="chating_input"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
          </div>
          <div className="chatting_bottom_icon">
            <FontAwesomeIcon icon={faPaperclip} />
            <FontAwesomeIcon icon={faFaceSmile} />
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chating2
