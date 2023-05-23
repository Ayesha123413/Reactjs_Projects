import React from 'react'
import './PropertyDetails.css'
import { houseData } from '../Data'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const PropertyDetails = () => {
  const { id } = useParams()
  console.log(id)
  const house = houseData.find((house) => {
    return house.id == id
  })
  console.log(house)

  return (
    <div className="PropertyDetails_container">
      <h1>{house.name}</h1>
      <div className="propertycontent_container">
        <div className="propertycontent_left">
          <img src={house.img} />
          <div className="property_left_bottom">
            <h1>Property Info</h1>
            <div>
              <p>
                Location: <span>{house.location}</span>
              </p>
              <p>
                Price: <span>{house.price}</span>
              </p>
              <p>
                Status: <span>{house.status}</span>
              </p>
              <p>
                No. of Bedrooms: <span>{house.bedrooms}</span>
              </p>
              <p>
                No. of Guests: <span>{house.guestd}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="vl"></div>
        <div className="property_right">
          <h1>Description</h1>
          <p>{house.description}</p>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
