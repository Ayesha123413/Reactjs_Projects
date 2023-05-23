import React from 'react'
import './House.css'
import { houseData } from '../Data'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const House = (props) => {
  return (
    <div className="House_container">
      {houseData.map((house, index) => {
        return (
          <Link to={`/mylisting/${house.id}`} key={index}>
            <div className="House_card">
              <img src={house.img} />
              <div2 className="card_content">
                <div className="card_top">
                  <h2>{house.price}</h2>
                  <p>{house.status}</p>
                </div>
                <h3>{house.name}</h3>
                <p>{house.location}</p>
                <hr />
                <div className="card_bottom">
                  <p>
                    {house.bedrooms} <span>Bedrooms</span>
                  </p>
                  <p>
                    {house.guestd} <span>Guests</span>
                  </p>
                </div>
              </div2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default House
