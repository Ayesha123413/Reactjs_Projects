import React, { useContext } from 'react'
import './IncExp.css'
import { GlobalContext } from '../Context/GlobalState'
const IncExp = () => {
  const { Transaction } = useContext(GlobalContext)
  const amount = Transaction.map((transaction) => transaction.amount)
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, currVal) => (acc += currVal), 0)
  const expense = Math.abs(
    amount
      .filter((item) => item < 0)
      .reduce((acc, currVal) => (acc += currVal), 0),
  )

  return (
    <div className="Inc-exp-container">
      <div>
        <h4>Income</h4>
        <h1>${income}</h1>
      </div>
      <hr className="incexp-hr" />
      <div>
        <h4>Expense</h4>
        <h1>${expense}</h1>
      </div>
    </div>
  )
}

export default IncExp
