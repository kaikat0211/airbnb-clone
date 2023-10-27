import React, { useState } from 'react'
import LoopButton from './LoopButton'

const RoomButton = ({roomType, margin}) => {
  return (
    <div>
        <p className={`${margin}`}>{roomType}</p>
        <div className='mt-4 flex gap-3'>
            <LoopButton roomType={roomType}></LoopButton>
        </div>
    </div>
  )
}

export default RoomButton