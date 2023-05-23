import React from 'react'
import './Notificationbar.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
const Notificationbar = () => {
  return (
    <div className="NB_container">
      <div className="notification">
        <h3>30</h3>
        <p>New Booking</p>
        <img src={image1} />
      </div>
      <div className="notification">
        <h3>29K</h3>
        <p>Total Earning</p>
        <img src={image2} />
      </div>
      <div className="notification">
        <h3>24</h3>
        <p>New Request</p>
        <img src={image3} />
      </div>
    </div>
  )
}

export default Notificationbar
