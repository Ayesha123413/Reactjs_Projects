import React from 'react'
import './Payment.css'
import visaimg from '../../../images/visa.png'
import paypalimg2 from '../../../images/paypal.png'
const Form = () => {
  return (
    <div className="payment_content">
      <div className="payment1_container">
        <div className="pay_method_card">
          <img src={visaimg} />
          <p>**** **** **** 5448</p>
        </div>
        <div className="pay_method_card">
          <img src={paypalimg2} />
          <p>Jemie Darren</p>
        </div>
        <div className="pay_method_card">
          <img src="" />
          <p>**** **** **** 5448</p>
        </div>
      </div>
      <div className="form">
        <form action="">
          <label>Card Number</label>
          <br />
          <input value={''} placeholder="****  ****  ****  *448" />
          <br />
          <label>Card Holder Name</label>
          <br />
          <input value={''} placeholder="Wade Warren" />
          <div className="form_bottom">
            <div>
              <label>Expire on</label>
              <input value={''} />
            </div>
            <div>
              <label>CVV</label>
              <input value={''} placeholder="..." />
            </div>
          </div>
          <a className="form_button" type="submit">
            Add Payment Method
          </a>
        </form>
      </div>
    </div>
  )
}

export default Form
