import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const valueLabelFormat = (value) => {
    return `${value * 490 + 1000}`; 
};
const generateNumberArray = (length) => {
    const middleIndex = Math.floor(length / 2);
    const minValue = 0;
    const maxValue = 70;

    const numberArray = new Array(length).fill(0);

    for (let i = 0; i < middleIndex; i++) {
        numberArray[i] = Math.random() * (maxValue - minValue);
    }

    for (let i = middleIndex; i < length; i++) {
        numberArray[i] = Math.random() * (maxValue - minValue);
    }

    return numberArray;
};


const arrayLength = 48;
const generatedArray = generateNumberArray(arrayLength).map(i => Math.floor(i));

  
export default function RangeSlider({value, setValue}) {
  

  const handleChange = (event, newValue) => {
    if(newValue[1]-newValue[0] < 5) return
    setValue(newValue);
  };
  const calculateBarColor = (index) => {
    if (index === 0) {
      return value[0] < 2 ? 'bg-slate-900' : 'bg-bordergray';
    } else {
      return value[0] < index * 2 && value[1] > index * 2 ? 'bg-slate-900' : 'bg-bordergray';
    }
  };
  
  const barChart = () => {
    return generatedArray.map((v, index) => (
        <div className={`absolute w-[1.7%] rounded-t-sm ${calculateBarColor(index)}  2xl:bottom-4 md:bottom-[21px] z-[-1] `} style={{ left: `${2 + index * 2}%`, height: `${v}%` }} key={index} />
    ));
};
  return (
    <Box sx={{height:100,display:'flex',alignItems:'end',position:'relative'}} className='mt-5'>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        valueLabelFormat={valueLabelFormat}
        min={0}
        max={100}
        sx={{
            '.MuiSlider-thumb': {
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                bgcolor:'#fff',
                width: 35,
                height: 35,
                '&:hover': {
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                },
                '&:active': {
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                },
            },
            '.MuiSlider-track': {
                backgroundColor: '#000',
                border: 'none',
                height: 2
            },
            '.MuiSlider-rail': {
                backgroundColor: '#DDDDDD',
                border: 'none', 
                height: 2
            },
        }}
      />
    {barChart()}
    </Box>
  );
}