import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const ToggleButton = () => {
    const [on, setOn] = useState(false)
  return (
    <button className='max-xl:hidden border-bordergray text-sm border rounded-2xl py-3 px-4 flex items-center gap-2.5' onClick={()=>setOn(()=>!on)}>
        顯示税前總價
        <div className={`h-full 2xl:w-[60px] xl:w-[40px] rounded-full flex ${on ? 'justify-end bg-black' : 'justify-start bg-gray-300'} transition duration-500`}>
            <div className='2xl:h-[30px] 2xl:w-[30px] xl:w-[20px] xl:h-[20px] rounded-full bg-white m-1 flex items-center justify-center'>
                {on && <AiOutlineCheck/>}
            </div>
        </div>
    </button>
  )
}

export default ToggleButton