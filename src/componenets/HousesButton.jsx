import React, { useEffect, useState } from 'react'

const HousesButton = ({ type, border, radius, activeType, handleType, price }) => {
    const buttonStyle = {
        background: activeType === type && 'radial-gradient(circle, rgba(53,53,53,1) 0%, rgba(33,33,33,1) 100%)',
        color: activeType === type ? '#fff' : '#000',
    }
  return (
    <button className={`border py-4 w-[30%] ${radius} focus:bg-gray-100 text-sm ${activeType !== type && 'hover:border-black'}`} style={buttonStyle} onClick={()=>handleType(type)}>
        <div className='font-semibold'>{type}</div>
        <div className='' style={{color:"#aaa9a9"}}>平均 ${price} TWD</div>
    </button>
  )
}

export default HousesButton