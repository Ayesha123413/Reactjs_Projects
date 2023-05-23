import React from 'react'
import './Payment.css'
import Form from './Form'
const PaymentMethod = () => {
  return (
    <div className="payment_container">
      <h2>Payment</h2>
      <br />
      <p>
        Please Provide Payment Information about How you Want
        <br /> Checkout Your Amount.
      </p>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default PaymentMethod
