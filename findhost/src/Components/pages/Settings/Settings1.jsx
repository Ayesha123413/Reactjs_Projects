import React, { useState } from 'react'
import './Settings1.css'
import img from '../../images/settings bg.png'
import profileimg from '../../images/img2.png'
import { Link } from 'react-router-dom'
const Settings1 = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <div className="setting1_container">
      <img src={img} alt="" />

      <div className="setting_content_left">
        <div className="profile_info">
          <img src={profileimg} alt="" />
          <h4>Jamie Darren</h4>
          <p>jamiedarren05@gmail.com</p>
        </div>
        <hr className="Setting_hr" />
        <div className="toggle_section">
          <h4>Landlord mode</h4>
          <div
            onClick={() => {
              setToggle(!toggle)
            }}
            className="toggle"
          >
            {toggle ? (
              <div className="toggle_left"></div>
            ) : (
              <div className="toggle_right"></div>
            )}
          </div>
        </div>
        <hr className="Setting_hr" />
        <div className="profile_sidebar">
          <Link
            className="profile_links"
            to="/settings/myaccount"
            activeclassName="active"
          >
            My Account
          </Link>
          <Link
            className="profile_links"
            to="/settings/financialinfo"
            activeclassName="active"
          >
            Financial Information
          </Link>
          <Link
            className="profile_links"
            to="/settings/payment"
            activeclassName="active"
          >
            Payment Method
          </Link>
          <Link
            className="profile_links"
            to="/settings/authentication"
            activeclassName="active"
          >
            Two-Factor Authintication
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Settings1
