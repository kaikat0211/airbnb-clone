import React from 'react'
import HouseCard from '../componenets/HouseCard'
import { HousesInfo } from '../constants'
const Houses = () => {
  return (
    <div className='padding grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
      {HousesInfo.map(house => (
        <HouseCard key={house.country} src={house.src} country={house.country} rating={house.rating} distance={house.distance} date={house.date} price={house.price} like={house.like}/>
      ))}
    </div>
  )
}

export default Houses