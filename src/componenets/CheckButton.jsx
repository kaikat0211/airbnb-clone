import React, { useState } from 'react';
import { checked, nochecked } from '../assets/icons';

const CheckButton = ({ item }) => {
  const [isCheckedArray, setIsCheckedArray] = useState(Array(item.length).fill(false));
  const handleItemClick = (index) => {
    const updatedIsCheckedArray = [...isCheckedArray];
    updatedIsCheckedArray[index] = !updatedIsCheckedArray[index];
    setIsCheckedArray(updatedIsCheckedArray);
  };
  return (
    <div className='grid grid-cols-2'>
        {item.map((f, index) => (
            <button className="flex mt-6" key={index} onClick={() => handleItemClick(index)}>
            <div className="border rounded-[5px] border-slate-500 hover:border-black">
                <img src={isCheckedArray[index] ? checked : nochecked} width={25} height={25} />
            </div>
            <p className="ml-3 font-light">{f}</p>
            </button>
        ))}
    </div>
  );
};

export default CheckButton;
