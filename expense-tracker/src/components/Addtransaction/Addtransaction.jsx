import React, { useContext, useState } from 'react'
import './Addtransaction.css'
import { GlobalContext } from '../Context/GlobalState'
import { nanoid } from 'nanoid'
const Addtransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addtransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    console.log('form', e)
    e.preventDefault()
    const newTransaction = {
      id: nanoid(),
      text,
      amount: parseInt(amount),
    }
    addtransaction(newTransaction)
  }
  return (
    <div className="addtransaction-container">
      <h3>Add New Transaction</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div>
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            placeholder="Enter Text..."
          />
        </div>
        <div>
          <label for="text">
            Amount <br />
            negative - expense,positive - cash
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default Addtransaction
