import React, { useState } from 'react'
import CheckButton from './CheckButton'
import { facilities, accessiblefacilities } from '../constants'
const Facilities = ({accessible, normal}) => {
    let arr;
    switch (true) {
    case normal:
        arr = Object.entries(facilities);
        break;
    case accessible:
        arr = Object.entries(accessiblefacilities);
        break;
    default:
        arr = [];
    }
    const [show, setShow] = useState(false)
    const initArr = arr.map(v => {
        const emptyArr = []
        v[1].map((e) => {
            emptyArr.push([e, false])
        })
        return emptyArr
    })
    const [isCheckedArray, setIsCheckedArray] = useState(initArr);
    const handleItemClick = (f, index) => {
        let checkedArrIndex = null
        const updatedIsCheckedArray = [...isCheckedArray]
        updatedIsCheckedArray.forEach((array, i) => {
            array.forEach((v) => {
                if(v[0] === f){
                    checkedArrIndex = i
                }
            })
        })
        console.log(updatedIsCheckedArray[checkedArrIndex][index])
        updatedIsCheckedArray[checkedArrIndex][index][1] = !updatedIsCheckedArray[checkedArrIndex][index][1];
        setIsCheckedArray(updatedIsCheckedArray);
    };
  return (
    <> 
        {!show && [arr[0]].map((f, i) => (
        <div key={i}>
            <h2 className='mt-5'>{f[0]}</h2>
            <CheckButton
                item={f[1].slice(0, 4)}
                setShow={setShow}
                isCheckedArray={isCheckedArray}
                handleItemClick={handleItemClick}
            />
        </div>
        ))}
        {show && arr.map((f, i) => (
            <div key={i}>
                <h2 className='mt-5'>{f[0]}</h2>
                <CheckButton
                    item={f[1]}
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

export default Facilities