import React, { useEffect, useState } from 'react';

const RangeInput = ({ value, setValue }) => {
    const [minInputValue, setMinInputValue] = useState(value[0] * 490 + 1000);
    const [maxInputValue, setMaxInputValue] = useState(value[1] * 490 + 1000);
    const [doing, setDoing] = useState(false)
    const handleMinInput = (e) => {
        setDoing(true)
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        setMinInputValue(numericValue);
    };

    const handleMaxInput = (e) => {
        setDoing(true)
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        setMaxInputValue(numericValue);
    };
    useEffect(() => {
        setValue([(minInputValue - 1000) / 490, (maxInputValue - 1000) / 490]);
    }, [minInputValue, maxInputValue])
    return (
        <div className='flex justify-between items-center mt-6'>
            <div className=" mt-2 px-3 py-2 bg-white border-2 shadow-sm w-[45%] border-bordergray group-focus:border-black block  rounded-2xl sm:text-sm">
                <span style={{ color: "#777777" }}>最低</span>
                <div className='mt-1'>
                    <span className='font-light'>＄</span>
                    <input
                        className='ml-1 outline-none group'
                        onFocus={(e) => {
                            e.target.parentNode.parentNode.classList.add("border-black");
                        }}
                        onBlur={(e) => {
                            e.target.parentNode.parentNode.classList.remove("border-black");
                            setDoing(false)
                        }}
                        value={minInputValue === value[0]*490+1000 ? minInputValue : doing ? minInputValue : value[0]*490+1000}
                        onInput={handleMinInput}
                    />
                </div>
            </div>
            <div className='w-[2.5%] border border-bordergray'></div>
            <div className=" mt-2 px-3 py-2.5 bg-white border-2 shadow-sm w-[45%] border-bordergray focus:outline-none focus:border-black block  rounded-2xl sm:text-sm">
                <span style={{ color: "#777777" }}>最高</span>
                <div className='mt-1'>
                    <span className='font-light'>＄</span>
                    <input
                        className='ml-1 outline-none'
                        onFocus={(e) => {
                            e.target.parentNode.parentNode.classList.add("border-black");
                        }}
                        onBlur={(e) => {
                            e.target.parentNode.parentNode.classList.remove("border-black");
                            setDoing(false)
                        }}
                        value={maxInputValue === value[1]*490+1000 ? maxInputValue : doing ? maxInputValue :  value[1]*490+1000}
                        
                        onInput={handleMaxInput}
                    />
                </div>
            </div>
        </div>
    );
}

export default RangeInput;
