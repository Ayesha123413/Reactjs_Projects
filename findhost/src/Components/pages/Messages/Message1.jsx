import React from 'react'
import './message1.css'
import img from '../Messages/img2.png'
import { MessagesData } from '../Data.js'
const Message1 = () => {
  return (
    <div className="message1_container">
      <h3>Search</h3>

      <div className="Chats-container">
        {MessagesData.map((items) => {
          return (
            <div>
              <div className="chat">
                <div className="left">
                  <img src={img} />
                  <div>
                    <h4>{items.name}</h4>
                    <p>{items.text}.</p>
                  </div>
                </div>

                <div className="right">
                  <p>{items.Time}</p>
                  <h3>{items.Notify}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Message1
