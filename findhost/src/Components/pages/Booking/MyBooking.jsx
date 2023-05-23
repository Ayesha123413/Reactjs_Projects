import React from 'react'
import './Mybooking.css'
import Booking2 from './Booking2'
import { BookingData } from '../Data.js'
import Booking1 from './Booking1'
const MyBooking = () => {
  return (
    <div className="Booking">
      <Booking1 />
      <Booking2 />
    </div>
  )
}

export default MyBooking
