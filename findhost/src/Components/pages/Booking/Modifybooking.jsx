import React from 'react'
import './Modifybooking.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import image from './Rectangle.png'
import img from './img2.png'
const Modifybooking = () => {
  return (
    <div className="MB_container">
      <div className="MD_left">
        <img src={image} />
        <div>
          <h3>Yew Tree House</h3>
          <h4>£150/Night</h4>
        </div>
        <p>
          Bristol,UK
          <br />
          Booking No: <span>#2214</span>
        </p>
        <div className="MD_check_section">
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
        <div className="MD_bottom_left">
          <p>Total Cost</p>
          <h3>£500.12</h3>
        </div>
      </div>
      <div className="vl"></div>
      <div className="MD_right">
        <h3>Description</h3>
        <p>
          With its clean, angular architecture and indoor-outdoor feel, Latimer
          Grand Oaks is West Coast mid-century modernism at its best. Inside,
          the home's minimal bones have been boosted by modern touches, from the
          contemporary furnishings - like the curved sofa in the living room -
          to bold artwork and vibrant rugs and wallpapers, while strategically.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <hr className="MD_horizontalline" />
        <div className="MD_rigth_sub1">
          <div>
            <img src={img} />
            <div>
              <h3>Wade Warren</h3>
              <p>Landlord</p>
            </div>
          </div>
          <div className="MD_right_icon">
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
        <hr className="MD_horizontalline" />
        <div className="MD_right_sub2">
          <div>
            <h3>Add Extra Days</h3>
            <p>+£200.22</p>
          </div>
          <div className="counter">
            <button>-</button>
            <h3>4</h3>
            <button>+</button>
          </div>
        </div>
        <a className="MD_Done" href="">
          Done
        </a>
      </div>
    </div>
  )
}

export default Modifybooking
