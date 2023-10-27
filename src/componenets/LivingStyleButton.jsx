import React, { useState } from 'react'
import { livingStyle } from '../constants'
const LivingStyleButton = () => {
    const [active, setActive] = useState([])
    const [mouseDown, setMouseDown] = useState(false)
    const handleButtonClick = (style) => {
        if (active.includes(style)) {
            setActive(active.filter(item => item !== style));
        } else {
            setActive([...active, style]);
        }
    };
  return (
    <>
        {livingStyle.map(h => (
            <button 
            className={`flex flex-col w-full p-3 rounded-xl gap-10 transition-transform duration-150 ease-in-out transform box-border hover:border-black ${active.includes(h.style) ?  'border-2 border-black bg-hoverbg' : 'border border-bordergray'} ${mouseDown === h.style ? 'scale-90' : 'scale-100'}`} 
            onClick={()=>handleButtonClick(h.style)}
            onMouseDown={()=>setMouseDown(h.style)} 
            onMouseUp={()=>setMouseDown(false)}
            key={h.style}
            >
                <div>
                    <img src={h.iconURL} width={45} height={45}/>
                </div>
                <p>{h.style}</p>
            </button>
        ))}
    </>
  )
}

export default LivingStyleButton