import { useContext } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import HouseContextProvider, { HouseContext } from './HouseContext'
import House from './House'
import { Link } from 'react-router-dom'
import { houseData } from '../Data'

const Houselist = () => {
  const Houses = useContext(HouseContext)
  console.log('houses in house list', Houses)
  return (
    <div>
      {Houses.map((house, index) => {
        ;<Link to={`/property/${house.id}`} key={index}>
          {console.log('in the house list', house.name)}
          // ;<House house={house} />
        </Link>
      })}
    </div>
  )
}

export default Houselist
