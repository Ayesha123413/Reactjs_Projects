import React from 'react'
import './mainPage.css'
import image from './img.png'
import { Link } from 'react-router-dom'
const MainPage = () => {
  return (
    <div className="mainpage_container">
      <div className="mpfirst">
        <h1>Find a host</h1>
        <img src={image} />
      </div>
      <div className="mpsecond">
        <div>
          <h1>Welcome to Find Host</h1>
          <br />
          <h3>List your Property And Let Hosts Bid on It for Best Offer.</h3>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <br />
        <div className="mp_buttons">
          <button>
            <Link to="/logIn">LogIn</Link>
          </button>
          <button>
            <Link to="/signUp">SignUp</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
