import React from 'react'
import Card from '../ContactUs/Card.js'
import webImage from './web.jpg'
import appImage from './appdev.jpg'
import aIImage from './VR.jpg'
import aRImage from './AR.jpg'
import gDImage from './GD.jpg'
import './Services.css'

function Services() {
  const CardData = [
    {
      imgsrc: webImage,
      title: 'Web Development',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      imgsrc: appImage,
      title: 'App development',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      imgsrc: aIImage,
      title: 'Virtual Reality',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      imgsrc: aIImage,
      title: 'Virtual Reality',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      imgsrc: aRImage,
      title: 'Augmented Reality',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      imgsrc: gDImage,
      title: 'Graphics Designing ',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ]
  return (
    <div className="services" id="services">
      <div className="cards">
        {CardData.map((nCard) => {
          console.log(nCard)
          return (
            <Card
              imgsrc={nCard.imgsrc}
              title={nCard.title}
              description={nCard.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Services
