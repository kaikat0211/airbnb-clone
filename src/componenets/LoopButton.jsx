import React, { useState } from 'react';

const LoopButton = () => {
    const buttonStyle = 'py-2 px-6 border hover:border-black text-sm rounded-full'
    const buttons = () => {
    const buttonArray = [];
    for (let i = 1; i < 8; i++) {
      buttonArray.push(
        <button key={i} className={`${buttonStyle} transition-transform duration-150 ease-in-out transform ${active === i && 'bg-black text-white'} ${mouseDown === i ? 'scale-95' : 'scale-100'}`} onClick={()=>setActive(i)} onMouseDown={()=>setMouseDown(i)} onMouseUp={()=>setMouseDown(false)}>
          {i}
        </button>
      );
    }
    return buttonArray;
  };
  const [active, setActive] = useState('任何')
  const [mouseDown, setMouseDown] = useState(false)
  
  return (
    <>
      <button className={`${buttonStyle} transition-transform duration-150 ease-in-out transform ${active === '任何' && 'bg-black text-white'} ${mouseDown === '任何' ? 'scale-95' : 'scale-100'}`} onClick={()=>setActive('任何')} onMouseDown={()=>setMouseDown('任何')} onMouseUp={()=>setMouseDown(false)}>
        任何
      </button>
      {buttons()}
      <button className={`${buttonStyle} transition-transform duration-150 ease-in-out transform ${active === '8+' && 'bg-black text-white'} ${mouseDown === '8+' ? 'scale-95' : 'scale-100'}`} onClick={()=>setActive('8+')} onMouseDown={()=>setMouseDown('8+')} onMouseUp={()=>setMouseDown(false)}>
        8+
      </button>
    </>
  );
};

export default LoopButton;
