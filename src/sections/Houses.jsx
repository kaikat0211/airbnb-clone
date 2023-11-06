import React from 'react'
import HouseCard from '../componenets/HouseCard'
import { HousesInfo } from '../constants'
const Houses = () => {
  return (
    <div className='padding w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-between gap-4 mt-2'>
      {HousesInfo.map(house => (
        <HouseCard key={house.country} src={house.src} country={house.country} rating={house.rating} distance={house.distance} date={house.date} price={house.price} like={house.like}/>
      ))}
    </div>
  )
}

export default Houses