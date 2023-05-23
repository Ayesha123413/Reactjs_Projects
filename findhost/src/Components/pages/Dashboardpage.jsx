import React from 'react'
import './Dashboardpage.css'
import Notificationbar from '../Notificationbar/Notificationbar'
import BrowseHost from './BrowseHost.jsx'
import { Link } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar'
import Message1 from './Messages/Message1'
import image from '../images/dbimage.png'
import MyBooking from './Booking/MyBooking'
import Booking1 from './Booking/Booking1'
const Dashboardpage = () => {
  return (
    <div className="Dashboardpage_container">
      <div className="right_box">
        <div className="right_top_section">
          <Notificationbar />
          <BrowseHost />
        </div>
        <div className="right_bottom_section">
          <div className="bottom_navbar">
            <Link className="link" to="/mybooking" activeclassName="active">
              MyBooking
            </Link>
            <Link className="link" to="/bids" activeclassName="active">
              Recent Bids
            </Link>
            <Link className="link" to="/reviews" activeclassName="active">
              Reviews
            </Link>
          </div>
          <div className="bottom_navbar_pages">
            <Sidebar />
            <Booking1 />
          </div>
        </div>
      </div>
      <div className="left_box">
        <img src={image} />
        <div>
          <Message1 />
        </div>
      </div>
    </div>
  )
}

export default Dashboardpage
