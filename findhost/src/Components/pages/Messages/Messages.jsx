import React from 'react'
import './Message.css'
import Message1 from './Message1'
import Chating2 from './Chating2'
import PersonInfo from './PersonInfo'
const Messages = () => {
  return (
    <div className="Message_container">
      <Message1 />
      <Chating2 />
      <PersonInfo />
    </div>
  )
}

export default Messages
