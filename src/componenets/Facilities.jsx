import React, { useState } from 'react'
import CheckButton from './CheckButton'
import { facilities } from '../constants'
const Facilities = () => {
    const [show, setShow] = useState(false)
    const arr = Object.entries(facilities)
  return (
    <> 
        {!show && [arr[0]].map( (f, i) => 
        (
            <div key={i}>
                <h2 className='mt-5'>{f[0]}</h2>
                <CheckButton item={f[1].slice(0, 4)} setShow={setShow}/>
            </div>
        ))}
        {show && arr.map( (f, i) => 
        (
            <div key={i}>
                <h2 className='mt-5'>{f[0]}</h2>
                <CheckButton item={f[1]} setShow={setShow}/>
            </div>
        ))}
        <div className='mt-4 underline underline-offset-1 cursor-pointer hover:text-slate-900'
        onClick={()=>setShow(!show)}>{show ? '顯示較少內容' : '顯示更多內容'}</div>
    </>
  )
}

export default Facilities