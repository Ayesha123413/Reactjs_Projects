import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faSquareGooglePlus,
  faAppStore,
} from '@fortawesome/free-brands-svg-icons'

const Login = () => {
  const [userLogin, setuserLogin] = useState({
    email: '',
    password: '',
  })
  const [records, setRecord] = useState([])

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    console.log({ ...userLogin })
    setuserLogin({ ...userLogin, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newRecord = { ...userLogin }
    setRecord([...records, newRecord])
  }

  return (
    <div className="login_container">
      <div className="lgfirst">
        <h3>FindaHost</h3>
        <br />
        <h1>Welcome to Find Host</h1>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <br />
        <br />
        <div className="social_media">
          <p>Login with social media link</p>
          <br />
          <div className="lgfirst_logos">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <div className="lgsecond">
        <div className="form_container">
          <h1>LogIn</h1>
          <p>Please fill your information below</p>
          <br />
          <form action="" onSubmit={handleSubmit} className="form">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={userLogin.email}
              onChange={handleInput}
            />
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={userLogin.password}
              onChange={handleInput}
            />
            <a href="">forgot Password?</a>

            <button type="submit">
              <Link to="/maindashboard">Login</Link>
            </button>
          </form>
          <div className="sub_container">
            <p>or login with</p>
            <div className="lgsecond_logos">
              <FontAwesomeIcon icon={faSquareGooglePlus} />
              <FontAwesomeIcon icon={faAppStore} />
            </div>
            <div className="sub_container1">
              <p>Don't have an Account yet?</p>
              <Link to="/signUp">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
