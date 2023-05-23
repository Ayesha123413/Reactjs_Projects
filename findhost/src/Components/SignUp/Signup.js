import { useState } from 'react'
import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [userRegisteration, setuserRegisteration] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [records, setRecord] = useState([])
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    console.log({ ...userRegisteration })
    setuserRegisteration({ ...userRegisteration, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newRecord = { ...userRegisteration }
    setRecord([...records, newRecord])
  }
  return (
    <div className="Signup_container">
      <div className="Supfirst">
        <h3>FindaHost</h3>
        <br />
        <h1>Welcome to Find Host</h1>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="Supsecond">
        <div className="form_container">
          <h1>Register</h1>
          <p>Please fill your information below</p>
          <br />
          <form action="" onSubmit={handleSubmit} className="form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userRegisteration.name}
              onChange={handleInput}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={userRegisteration.email}
              onChange={handleInput}
            />
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={userRegisteration.password}
              onChange={handleInput}
            />
            <button className="Signup_button" type="submit">
              Register
            </button>
          </form>
          <div className="Signup_sub_container">
            <p>Don't have an Account yet?</p>
            <Link to="/logIn">LogIn</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
