import React, { useContext } from 'react'
import './Transaction.css'
import { GlobalContext } from '../Context/GlobalState'
const Transaction = () => {
  const { Transaction, deletetransaction } = useContext(GlobalContext)

  return (
    <div className="trasaction-container">
      <h3>History</h3>
      <hr />
      <ul className="list">
        {Transaction.map((trasaction) => {
          const sign = trasaction.amount < 0 ? '-' : '+'
          return (
            <li className={trasaction.amount < 0 ? 'minus' : 'plus'}>
              {trasaction.text}
              <span>
                {sign}${Math.abs(trasaction.amount)}
              </span>
              <button
                className="delete-btn"
                onClick={() => deletetransaction(trasaction.id)}
              >
                x
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Transaction
