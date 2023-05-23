import React from 'react'
import './Marketleft.css'
import img from './Market.png'
import { CatagoriesData, CategoryPerson } from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const MarketLeft = () => {
  return (
    <div className="Market_left">
      <div className="Market_top_left">
        <div className="Discover">
          <h2>Discovery</h2>
          <img src={img} />
        </div>
        <div className="Category">
          <h2>Category</h2>
          <div className="Category_images">
            {CatagoriesData.map((item) => {
              return (
                <>
                  <div className="category">
                    <img className="image" src={item.image} />
                    <p>{item.text}</p>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <div className="Market_bottom_left">
        <h2>Near Me</h2>
        <div className="MB_Card_Container">
          {CategoryPerson.map((item) => {
            return (
              <>
                <div className="card">
                  <img src={item.image} />
                  <div>
                    <h3>{item.text}</h3>
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} />
                      <p>{item.rating}</p>
                    </div>
                  </div>
                  <p>{item.name}</p>
                  <hr className="ML_horizaontalline" />
                  <div>
                    <p>{item.distance}</p>
                    <h3 className="price">{item.price}</h3>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MarketLeft
