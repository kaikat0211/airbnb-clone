import React, { useState } from 'react';
import { Icons } from '../constants';
const FilterIconsOverFlow = ({ iconContainerRef }) => {
  const [selected, setSelected] = useState('三角屋')
  return (
    <div 
    className={`flex gap-[2.7rem] items-center md:w-4/5 lg:w-4/5 xl:w-[70%] 2xl:w-3/4 relative overflow-x-auto h-full py-3 scrollbar-hide ease-out duration-1000 scroll-smooth`}
    ref={iconContainerRef}
    >
      {Icons.map((icon) => (
        <div key={icon.categories} className='relative gap-1 cursor-pointer group flex flex-col items-center' 
        onClick={()=>{setSelected(icon.categories)}}
        >
          <img src={icon.iconURL} alt={icon.categories} width={20} height={20} />
          <span className='whitespace-nowrap text-sm'>{icon.categories}</span>
          {selected === icon.categories && <div className='absolute bottom-[-10px] left-0 w-full h-[3px] bg-black'></div>}
          {selected !== icon.categories && <div className='absolute bottom-[-10px] left-0 w-full h-[3px] bg-gray-300 opacity-0 group-hover:opacity-100'></div>}
        </div>
      ))}
      
    </div>
  );
};

export default FilterIconsOverFlow;
