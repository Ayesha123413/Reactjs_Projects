import React from 'react'
import aboutimg from './About.jpg'
import './About.css'
function About() {
  return (
    <div id="about">
      <div className="abt_container">
        <div className="img">
          <img src={aboutimg} alt="img" />
        </div>
        <div className="content">
          <h3>About</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <h4>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin.
          </h4>
          <button className="about_btn">Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default About
