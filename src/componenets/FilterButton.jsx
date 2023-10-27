import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { filter, cross } from '../assets/icons'
import HousesButton from './HousesButton';
import RoomButton from './RoomButton'
import PriceRange from './PriceRange';
import LivingStyleButton from './LivingStyleButton';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '42%',
    height: '87%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:'1.9%',
  };
  
const FilterButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [activeType, setActiveType] = useState('任何類型')
    const handleType = type => {
        setActiveType(type)
    } 
    const typeDescription = {
        '任何類型': '搜尋房間、整套房源等各種住宿。 顯示的總價是平均 5 晚的未稅價格。',
        '房間': '在房源內享有專屬的房間，也能使用共用空間。 顯示的總價是平均 5 晚的未稅價格。',
        '整套房源': '整套房源全都供你使用。 顯示的總價是平均 5 晚的未稅價格.',
      };
    const description = typeDescription[activeType];
  return (
    <>
        <button className='border-2 rounded-2xl border-bordergray flex items-center gap-2.5 p-4 font-semibold ' onClick={handleOpen}>
                    <img src={filter} width={16}/>
                    篩選條件
        </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ zIndex: 1000 }}
                >
                        <Box sx={style} className='overflow-auto relative'>
                            <div className='flex items-center justify-center border-b border-bordergray py-5 sticky top-0 z-10' style={{background:"#FFFFFF"}}>
                                <button className='rounded-full hover:bg-hoverbg absolute left-4' onClick={handleClose}>
                                    <img src={cross} alt='cross' width={28} height={28}/>
                                </button>
                                <span className='font-medium text-md'>篩選條件</span>
                            </div>
                            <div className='mx-5 pt-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal'>房源類型</h2>
                                <p className='text-sm my-2' style={{color:"#222222"}}>{description}</p>
                                <div className='w-full flex justify-center my-7 mx-0'>
                                    <HousesButton type={'任何類型'} activeType={activeType} radius={'rounded-l-lg'} handleType={handleType} price={22092}/>
                                    <HousesButton type={'房間'} activeType={activeType} handleType={handleType} price={9057}/>
                                    <HousesButton type={'整套房源'} activeType={activeType} radius={'rounded-r-lg'} handleType={handleType} price={26153}/>
                                </div>
                            </div>
                            <div className='mx-5 py-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal'>價格範圍</h2>
                                <PriceRange />
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>臥室和床鋪</h2>
                                <RoomButton roomType={'臥室'}/>
                                <RoomButton roomType={'床位'} margin={'mt-6'}/>
                                <RoomButton roomType={'衛浴'} margin={'mt-6'}/>
                            </div>
                            <div className='mx-5 py-8 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>住宿類型</h2>
                                <div className='grid grid-cols-4 w-full h-full gap-4'>
                                    <LivingStyleButton />
                                </div>
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>臥室和床鋪</h2>
                                <RoomButton roomType={'臥室'}/>
                                <RoomButton roomType={'床位'} margin={'mt-6'}/>
                                <RoomButton roomType={'衛浴'} margin={'mt-6'}/>
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>臥室和床鋪</h2>
                                <RoomButton roomType={'臥室'}/>
                                <RoomButton roomType={'床位'} margin={'mt-6'}/>
                                <RoomButton roomType={'衛浴'} margin={'mt-6'}/>
                            </div>
                            <div className=' py-5 px-5 w-full flex justify-between items-center border-t sticky bottom-0 z-10' style={{background:"#FFFFFF"}}>
                                <span className='underline underline-offset-2 cursor-pointer'>清除全部</span>
                                <button className='py-3 px-6 bg-slate-800 hover:bg-slate-950 text-white rounded-md'>顯示 668 間房源</button>
                            </div>
                        </Box>
                </Modal>
    </>
  )
}

export default FilterButton