import React from 'react'
import HouseContextProvider, { HouseContext } from './HouseContext'
import Houselist from './Houselist'
import House from './House'
import { houseData } from '../Data'
import './MyListing.css'
import PropertyDetails from './PropertyDetails'
const MyListing = () => {
  return (
    <div className="listing_container">
      <House />
      <PropertyDetails />
    </div>
  )
}

export default MyListing
