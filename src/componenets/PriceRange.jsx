import React, { useState } from 'react'
import RangeSlider from './RangeSlider'
import RangeInput from './RangeInput'

const PriceRange = () => {
    const [value, setValue] = React.useState([0, 100]);
    
  return (
    <div className='px-9'>
        <RangeSlider value={value} setValue={setValue}/>
        <RangeInput value={value} setValue={setValue}/>
    </div>
  )
}

export default PriceRange