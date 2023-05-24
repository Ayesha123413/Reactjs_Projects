import React, { Component, useState } from 'react'
import './Contact.css'
const Form = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <form action="">
      <div>
        <label>Name </label>
        <input
          type="text"
          name="username"
          value={formValue.username}
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <label>Email </label>
        <input
          type="text"
          name="email"
          value={formValue.email}
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <label>Phone Number </label>
        <input
          type="text"
          name="phoneNumber"
          value={formValue.phoneNumber}
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <label>Message </label>
        <input
          type="text"
          name="message"
          value={formValue.message}
          onChange={handleInput}
        />
      </div>
      <br />
      <button className="form_btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form
