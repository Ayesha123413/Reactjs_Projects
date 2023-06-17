import React, { createContext, useReducer } from 'react'
import Transaction from '../Transaction/Transaction'

const initialState = {
  Transaction: [],
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        // ...state,
        Transaction: state.Transaction.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      }
    case 'ADD_TRANSACTION':
      return {
        Transaction: [action.payload, ...state.Transaction],
      }

    default:
      return state
  }
}
export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
  const [state, disptch] = useReducer(reducer, initialState)

  function deletetransaction(id) {
    disptch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }
  function addtransaction(transaction) {
    disptch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        Transaction: state.Transaction,
        deletetransaction,
        addtransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
