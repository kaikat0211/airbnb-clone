import React, { useState } from 'react';
import { checked, nochecked } from '../assets/icons';

const CheckButton = ({ item, isCheckedArray, handleItemClick, language }) => {
  const textFunc = (value) => {
    let facilities = isCheckedArray.map((bigArr, i) => bigArr.filter(v => v[0] === value)).filter(arr => arr.length >= 1)
    return facilities.flat()[0][1]; 
}
  const handleSrc = (f, index) => {
    if(language) {
      switch(isCheckedArray[index]) {
        case true : 
        return checked
        default: 
        return nochecked
      }
    }
    else return textFunc(f) ? checked : nochecked
  }
  return (
    <div className='grid grid-cols-2'>
        {item.map((f, index) => (
            <button className="flex mt-6" key={index} onClick={() => handleItemClick(f, index)}>
            <div className="border rounded-[5px] border-slate-500 hover:border-black">
                <img src={handleSrc(f, index)} width={25} height={25} />
            </div>
            <p className="ml-3 font-light">{f}</p>
            </button>
        ))}
    </div>
  );
};

export default CheckButton;
