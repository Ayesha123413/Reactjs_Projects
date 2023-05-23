import React from 'react'
import { useParams } from 'react-router-dom'
import './Settings2.css'
import Myaccount from './Myaccount.jsx'
import FinancialInfomation from './FinanacialInformation'
import Settings1 from './Settings1'
import PaymentMethod from './Payment/PaymentMethod'
import Authetication from './Authetication'

const Settings2 = () => {
  const { name } = useParams()

  return (
    <div className="settings2_container">
      {name === 'myaccount' ? (
        <Myaccount />
      ) : name === 'financialinfo' ? (
        <FinancialInfomation />
      ) : name === 'payment' ? (
        <PaymentMethod />
      ) : name === 'authentication' ? (
        <Authetication />
      ) : (
        <h1> Ooops, Page is not found</h1>
      )}
    </div>
  )
}

export default Settings2
