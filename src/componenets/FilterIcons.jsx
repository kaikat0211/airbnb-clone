import React, { useState } from 'react';
import { Icons } from '../constants';
import { leftArrow, rightArrow } from '../assets/icons';
const FilterIcons = () => {
  const [selected, setSelected] = useState('三角屋')
  const [start, setStart] = useState(0)
  const chunkSize = 11
  const moveRange = step => {
    const newStart = start + step
    if(newStart > 0 && newStart + chunkSize <= Icons.length) setStart(newStart) 
    else if (newStart === 0) setStart(0)
  }
  const showLeftArrow = start > 0;
  const showRightArrow = start + chunkSize < Icons.length
  return (
    <div className={`grid grid-cols-11 gap-[2rem] pr-5 items-center w-3/4  relative overflow-hidden-x ${showLeftArrow && 'pl-8'}`}>
      {showLeftArrow && <button className='absolute p-0.5 border-2 rounded-full hover:shadow-md' onClick={()=> moveRange(-7)} >
        <img src={leftArrow} width={28} height={28} className=' z-3 '/>
      </button>}
      {Icons.slice(start, start + chunkSize).map((icon) => (
        <div key={icon.categories} className='relative cursor-pointer group flex flex-col items-center gap-3' onClick={()=>{setSelected(icon.categories)}}>
          <img src={icon.iconURL} alt={icon.categories} width={24} height={24} />
          <span className='whitespace-nowrap'>{icon.categories}</span>
          {selected === icon.categories && <div className='absolute bottom-[-10px] left-0 w-full h-[3px] bg-black'></div>}
          {selected !== icon.categories && <div className='absolute bottom-[-10px] left-0 w-full h-[3px] bg-gray-300 opacity-0 group-hover:opacity-100'></div>}
        </div>
      ))}
      {showRightArrow &&<button className='absolute p-0.5 border-2 rounded-full right-[-3%] hover:shadow-md' onClick={()=> moveRange(7)}>
        <img src={rightArrow} width={28} height={28}/>
      </button>}
    </div>
  );
};

export default FilterIcons;
