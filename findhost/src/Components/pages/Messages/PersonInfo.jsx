import React from 'react'
import './PersonInfo.css'
import image from './img2.png'
import image1 from './image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'
const PersonInfo = () => {
  return (
    <div className="PersonInfo_container">
      <div className="PI_top">
        <img src={image} />
        <h3>Antonio reese</h3>
        <h5>Manhattan Cozy</h5>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting.
        </p>
        <div className="PI_icons">
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
      <hr className="PI_middle_line" />
      <div className="PI_middle">
        <h5>2.5 Ratings</h5>
        <div className="middle_rating">
          <div className="PI_sub_middle">
            <FontAwesomeIcon icon={faStar} />
            <p>4.5</p>
          </div>
          <div className="PI_sub2_middle">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
      <hr className="PI_middle_line" />
      <div className="PI_bottom">
        <div className="PI_sub_bottom">
          <h3>Media(6)</h3>
          <a href="">See all</a>
        </div>
        <div className="PI_bottom_Imgs">
          <img src={image1} />
          <img src={image1} />
          <img src={image1} />
          <img src={image1} />
        </div>
      </div>
    </div>
  )
}

export default PersonInfo
