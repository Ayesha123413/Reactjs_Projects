import { createContext, useState } from 'react'
import React from 'react'
import { houseData } from '../Data'
import Houselist from './Houselist'

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(houseData)

  return (
    <div>
      <HouseContext.Provider value={houses}>
        {console.log('this is housecntect', { houses })}
        <Houselist />
      </HouseContext.Provider>
    </div>
  )
}

export default HouseContextProvider
