import React from 'react'
import './Mybooking.css'
import { BookingData } from '../Data'
const Booking1 = () => {
  return (
    <div className="booking_right">
      {BookingData.map((item) => {
        return (
          <div className="booking_container">
            <div className="top">
              <div className="sub_top">
                <img src={item.image} />
                <h4>{item.name}</h4>
              </div>
              <p>Active Booking</p>
            </div>
            <div className="middle">
              <div className="checkin">
                <p>Check-in</p>
                <hr />
                <h4>{item.checkInDate}</h4>
                <h3>02:00 PM</h3>
              </div>
              <div className="checkout">
                <p>Check-out</p>
                <hr />
                <h4>{item.checkOutDate}</h4>
                <h3>11:40 AM</h3>
              </div>
            </div>
            <div className="bottom">
              <div className="sub_bottom">
                <p>Property:</p>
                <h4>{item.location}</h4>
              </div>
              <h2>{item.price}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Booking1
