import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const ToggleButtonForFilter = () => {
    const [on, setOn] = useState(false)
  return (
    <button onClick={()=>setOn(!on)}>
        <div className={`h-full w-[50px] rounded-full flex ${on ? 'justify-end bg-black' : 'justify-start bg-gray-300'} transition duration-500`}>
            <div className='h-[24px] w-[25px] rounded-full bg-white m-1 flex items-center justify-center'>
                {on && <AiOutlineCheck/>}
            </div>
        </div>
    </button>
  )
}

export default ToggleButtonForFilter