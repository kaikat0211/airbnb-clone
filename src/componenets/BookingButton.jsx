import React from 'react'
import ToggleButtonForFilter from './ToggleButtonForFilter'
const BookingButton = ({title, description}) => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <p className='font-light text-black text-md'>{title}</p>
            <p className={`text-sm ${title === '允許攜帶寵物' ? 'text-medium underline cursor-pointer': 'font-extralight'}`} style={{color:'#7a7a7a'}}>{description}</p>
        </div>
        <ToggleButtonForFilter />
    </div>
  )
}

export default BookingButton