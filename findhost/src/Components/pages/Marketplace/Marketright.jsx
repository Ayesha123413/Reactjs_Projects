import React from 'react'
import './Marketright.css'
import img from './Rectangle.png'
import { CategoryPerson } from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Marketright = () => {
  return (
    <div className="Marketright">
      <div className="Market_top_right">
        <img src={img} />
      </div>
      <div className="Market_bottom_right">
        <div className="Market_right_sub1">
          <h2>Promoted</h2>
          <a href=""> View all</a>
        </div>
        {CategoryPerson.map((item) => {
          return (
            <>
              <div className="Market_right_sub2">
                <div>
                  <img src={item.image} />
                  <div className="details">
                    <h4>{item.text}</h4>
                    <p>{item.name}</p>
                    <h4>{item.price}</h4>
                  </div>
                </div>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <p>{item.rating}</p>
                </div>
              </div>
              <hr className="MR_horiLine" />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Marketright
