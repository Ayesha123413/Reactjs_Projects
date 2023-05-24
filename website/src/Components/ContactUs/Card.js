import React from 'react'
import './Card.css'

const Card = (props) => {
  console.log(props)
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="image" className="card_image" />
        <div className="card_info">
          <h3 className="card_title">{props.title}</h3>
          <p className="card_description">{props.description}</p>
          <a href="" target="_blank">
            <button className="card_btn">More</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
