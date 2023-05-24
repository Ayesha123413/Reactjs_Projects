import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false)

  const handleclick = () => {
    if (!showMediaIcon) {
      setShowMediaIcon(true)
      console.log('true')
    } else {
      setShowMediaIcon(false)
      console.log('false')
    }
  }
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>A</span>yesha
            <span>W</span>eb
          </h2>
        </div>

        <div
          className={showMediaIcon ? 'menu-link mobile-menu-link' : 'menu-link'}
        >
          <Router>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li className="nav_item">
                <a href="#services">Services</a>
              </li>
              <li className="nav_item">
                <a href="#about">About</a>
              </li>
              <li className="nav_item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Router>
        </div>
        <div className="humburger-menu">
          <a href="#" onClick={handleclick}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
