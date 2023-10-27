import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const ToggleButton = () => {
    const [on, setOn] = useState(false)
  return (
    <button className='border-bordergray font-semibold border-2 rounded-2xl py-3 px-4 flex items-center gap-2.5' onClick={()=>setOn(()=>!on)}>
        顯示税前總價
        <div className={`h-full w-[60px] rounded-full flex ${on ? 'justify-end bg-black' : 'justify-start bg-gray-300'} transition duration-500`}>
            <div className='h-[29px] w-[30px] rounded-full bg-white m-1 flex items-center justify-center'>
                {on && <AiOutlineCheck/>}
            </div>
        </div>
    </button>
  )
}

export default ToggleButton