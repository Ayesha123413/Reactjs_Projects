import React from 'react'
import './Header.css'
import image from './img2.png'
import img from './findahost.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCaretDown,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">
        <img src={img} />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="header_right">
        <FontAwesomeIcon className="bell icon" icon={faBell} />
        <div className="header_sub_right">
          <img src={image} />

          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <Link to="/logIn">
          <FontAwesomeIcon
            className="logout icon"
            icon={faArrowRightToBracket}
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
