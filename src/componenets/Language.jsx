import React, { useState } from 'react'
import CheckButton from './CheckButton'
import { languages } from '../constants'
const Language = () => {
    const [show, setShow] = useState(false)
    const arr = [languages]
    const initArr = arr.map(v => Array(v.length).fill(false));
    const [isCheckedArray, setIsCheckedArray] = useState(initArr);
    const handleItemClick = ( _, index) => {
        const updatedIsCheckedArray = [...isCheckedArray];
        updatedIsCheckedArray[index] = !updatedIsCheckedArray[index];
        setIsCheckedArray(updatedIsCheckedArray);
    };
  return (
    <>
        {!show && arr.map( (f, i) => 
        (
            <div key={i}>
                <CheckButton 
                language={true}
                item={f.slice(0, 4)} 
                setShow={setShow}
                isCheckedArray={isCheckedArray}
                handleItemClick={handleItemClick}
                />
            </div>
        ))}
        {show && arr.map( (f, i) => 
        (
            <div key={i}>
                <CheckButton 
                language={true}
                item={f} 
                setShow={setShow}
                isCheckedArray={isCheckedArray}
                handleItemClick={handleItemClick}
                />
            </div>
        ))}
        <div className='mt-4 underline underline-offset-1 cursor-pointer hover:text-slate-900'
        onClick={()=>setShow(!show)}>{show ? '顯示較少內容' : '顯示更多內容'}</div>
    </>
  )
}

export default Language