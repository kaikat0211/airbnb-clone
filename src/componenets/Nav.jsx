import React, { useState } from 'react'
import { searchIcon } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { IoSearch, IoPersonCircleSharp } from 'react-icons/io5'
import { RiGlobalLine } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import ToggleButton from './ToggleButton'
import FilterIcons from './FilterIcons'
import FilterButton from './FilterButton'

const Nav = () => {
    const [memberActive, setMemberActive] = useState(false)
  return (
    <header className='sticky z-10 w-full'>
        <nav className='flex justify-between items-center padding border-b-2 py-5'>
            <div className='w-1/4'>
                <a href='/'>
                    <img src={headerLogo}
                    alt='logo'
                    width={130}
                    height={32}
                    />
                </a>
            </div>
            <button className='flex items-center py-3 border border-bordergray shadow-sm rounded-full pr-3 pl-3  text-[18px] hover:shadow-md'>
                <div className='border-r px-4 border-gray-300 font-semibold'>任何地方</div>
                <div className='border-r px-4 border-gray-300 font-semibold'>任 1 週</div>
                <div className='flex items-center'>
                    <div className='text-gray-400 px-4'>新增人數</div>
                    <IoSearch className='w-[35px] h-[35px] text-white font-semibold p-2 rounded-full' style={{background:"rgb(255,56,92)"}}/>
                </div>
            </button>
            <div className='flex justify-between items-center gap-2'>
                <button className='text-[16px] rounded-full hover:bg-hoverbg p-4 leading-4'>在   Airbnb 上發布房源</button>
                <button className='rounded-full hover:bg-hoverbg p-4'>
                    <RiGlobalLine className='text-[24px]'/>
                </button>
                <div className='group'>
                    <button className={`flex items-center gap-2 border border-bordergray rounded-full py-1 pr-1 pl-4 text-gray-700 hover:shadow-md z-25 ${memberActive && 'shadow-md'}`} onClick={()=>setMemberActive(!memberActive)}>
                        <AiOutlineMenu className='text-2xl'/>
                        <IoPersonCircleSharp className='text-[40px]' style={{color:"#717171"}}/>
                    </button>
                    <div className={`absolute w-[13%] h-[80%] rounded-xl bg-white right-[80px] bottom-[-35px] z-20 py-2.5 border border-1 ${!memberActive && 'hidden'}`} style={{ boxShadow: "9px -9px 18px #f5f5f5, -9px 9px 18px #ffffff" }}>
                        <div className='flex flex-col text-sm'>
                            <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5 font-semibold'>註冊</span>
                            <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5'>登入</span>
                            <div className='w-full h-[1px] border border-1 border-bordergray my-2'></div>
                            <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5'>在Airbnb上發布房源</span>
                            <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5'>說明中心</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className='py-10 padding flex items-center justify-between'>
            <FilterIcons />
            <div className='flex gap-5'>
                <FilterButton />
                <ToggleButton />
            </div>
        </div>
    </header>
  )
}

export default Nav