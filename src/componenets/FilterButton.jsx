import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { filter, cross } from '../assets/icons'
import HousesButton from './HousesButton';
import RoomButton from './RoomButton'
import PriceRange from './PriceRange';
import LivingStyleButton from './LivingStyleButton';
import Facilities from './Facilities';
import ToggleButtonForFilter from './ToggleButtonForFilter';
import BookingButton from './BookingButton';
import Language from './Language';
const keyframes = `
    @keyframes slide-top {
      0% {
        transform: translate(-50%, 100%);
      }
      100% {
        transform: translate(-50%, -50%);
      }
    }
  `;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '42%',
    minWidth:'768px',
    height: '87%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:'1.9%',
    WebkitOverflowScrolling: 'touch', 
    scrollbarWidth: 'none', 
    '&::-webkit-scrollbar': {
        display: 'none', 
    },
    animationName: 'slide-top',
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    animationFillMode: 'both',
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
        <style>{keyframes}</style>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ zIndex: 1000 }}
                >
                        <Box sx={style} className='overflow-auto relative '>
                            <div className='flex items-center justify-center border-b border-bordergray py-5 sticky top-0 z-20' style={{background:"#FFFFFF"}}>
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
                            <div className='mx-5 py-8 border-b border-bordergray '>
                                <h2 className='text-2xl font-normal mb-5'>住宿類型</h2>
                                <div className='grid grid-cols-4 w-full gap-4'>
                                    <LivingStyleButton />
                                </div>
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>設備與服務</h2>
                                <Facilities normal={true}/>
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>預訂選項</h2>
                                <div className='flex flex-col gap-5'>
                                    <BookingButton title={'即時預訂'} description={'無需等待房東批准即可預訂的房源'}/>
                                    <BookingButton title={'自助入住'} description={'抵達後可輕鬆進入房源'}/>
                                    <BookingButton title={'允許攜帶寵物'} description={'會攜帶服務性動物嗎？'}/>
                                </div>
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>無障礙設施與服務</h2>
                                <Facilities accessible={true}/>
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>高級住宿</h2>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='font-extralight text-black text-md'>超讚房東</p>
                                        <p className='font-extralight text-sm' style={{color:'#7a7a7a'}}>向獲得認可的房東租住房源</p>
                                        <p className='underline text-sm mt-1 cursor-pointer'>了解詳情</p>
                                    </div>
                                    <ToggleButtonForFilter />
                                </div>
                            </div>
                            <div className='py-8 mx-5 border-b border-bordergray'>
                                <h2 className='text-2xl font-normal mb-5'>房東語言</h2>
                                <Language />
                            </div>
                            <div className=' py-5 px-5 w-full flex justify-between items-center border-t sticky bottom-0 z-20' style={{background:"#FFFFFF"}}>
                                <span className='underline underline-offset-2 cursor-pointer'>清除全部</span>
                                <button className='py-3 px-6 bg-slate-800 hover:bg-slate-950 text-white rounded-md'>顯示 668 間房源</button>
                            </div>
                        </Box>
                </Modal>
    </>
  )
}

export default FilterButton