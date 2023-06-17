import React, { useContext } from 'react'
import './Balance.css'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const { Transaction } = useContext(GlobalContext)
  const amount = Transaction.map((transaction) => transaction.amount)
  const total = amount.reduce((acc, currentValue) => (acc += currentValue), 0)

  return (
    <div className="balance-container">
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance
