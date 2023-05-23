import React from 'react'
import './Booking2.css'
import image from './img2.png'
import image1 from './Rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Booking2 = () => {
  return (
    <div className="booking_left_container">
      <div className="booking_left_top">
        <div className="booking_sub_left_top">
          <img src={image} />
          <div>
            <h4>Wade Warren</h4>
            <p>Landlord</p>
          </div>
        </div>
        <div className="booking_left_icons">
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
      <div className="booking_left_middle">
        <h3> Booking Details </h3>
        <div className="booking_left_middle2">
          <img src={image1} />
          <div>
            <p>Active Booking</p>
            <h4>Yew Tree House</h4>
            <h5>Bristol,UK</h5>
            <h3>£150/Night</h3>
          </div>
        </div>
        <div className="booking_left_middle3">
          <div>
            <p>Bid Placed:</p>
            <h3>12 March,2023</h3>
          </div>
          <div>
            <p>Booking No:</p>
            <h3>#2214</h3>
          </div>
        </div>
        <div className="booking_left_middle4">
          <div className="checkin">
            <h4>Jan 20,Friday</h4>
            <h3>02:00 PM</h3>
            <hr />
            <p>Check-in</p>
          </div>
          <div className="checkout">
            <h4>Jan 20,Friday</h4>
            <h3>11:40 AM</h3>
            <hr />
            <p>Check-out</p>
          </div>
        </div>
        <div className="booking_left_middle5">
          <p>Total Cost</p>
          <h3>£500.12</h3>
        </div>
      </div>
      <div className="booking_button_section">
        <a className="booking_button Modify" href="/modifybooking">
          Modify booking
        </a>
        <a className="booking_button Done" href="">
          Done
        </a>
      </div>
    </div>
  )
}

export default Booking2
