import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div id="home">
      <div className="banner">
        <div className="banner_content">
          <div className="container">
            <h3 className="banner_title">Choose your Niche</h3>
            <h1>I am Designer</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.{' '}
              <br />
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>

            <a href="#" className="btn">
              Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
