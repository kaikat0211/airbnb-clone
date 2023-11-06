import React, { useRef, useState, useEffect } from 'react'
import { headerLogo } from '../assets/images'
import { IoSearch, IoPersonCircleSharp } from 'react-icons/io5'
import { RiGlobalLine } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import ToggleButton from './ToggleButton'
import { leftArrow, rightArrow } from '../assets/icons';
import FilterIcons from './FilterIcons'
import FilterButton from './FilterButton'
import FilterIconsOverFlow from './FilterIconsOverFlow'

const Nav = () => {
    const [memberActive, setMemberActive] = useState(false)
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const iconContainerRef = useRef(null);
    const scrollLeft = () => {
        if (iconContainerRef.current) {
        const container = iconContainerRef.current;
        const scrollAmount = 800;
        container.scrollLeft -= scrollAmount;
        }
    };

    const scrollRight = () => {
        if (iconContainerRef.current) {
        const container = iconContainerRef.current;
        const scrollAmount = 800;
        container.scrollLeft += scrollAmount;
        }
    };
    useEffect(() => {
        const container = iconContainerRef.current;
        const handleScroll = () => {
          setShowLeftButton(container.scrollLeft > 0);
          setShowRightButton(container.scrollLeft + 2 < (container.scrollWidth - container.clientWidth));
        };
    
        container.addEventListener('scroll', handleScroll);
    
        handleScroll();
    
        return () => {
          container.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const divRef = useRef(null)
    const buttonRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
              setMemberActive(false)
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
      const toggleMemberActive = () => {
        setMemberActive(true);
      };

      const handleButtonClick = () => {
        if(memberActive === false) toggleMemberActive()
        else setMemberActive(false)
      };
  return (
    <header className='sticky z-10 top-0 bg-white'>
        <nav className='flex justify-between items-center xl:padding md:px-[40px] border-b-2 py-5'>
            <div className='xl:w-2/5 md:w-1/6'>
                <a href='/'>
                    <img src={headerLogo}
                    alt='logo'
                    width={130}
                    height={32}
                    />
                </a>
            </div>
                <button className='flex items-center p-2 border border-bordergray shadow-sm rounded-full  hover:shadow-md w-[330px]  md:text-sm md:ml-2'>
                    <div className='border-r  border-gray-300 font-semibold w-[30%] '>任何地方</div>
                    <div className='border-r  border-gray-300 font-semibold w-[30%] '>任 1 週</div>
                    <div className='flex items-center w-[40%]'>
                        <div className='text-gray-400 px-4 truncate'>新增人數</div>
                        <IoSearch className='w-[28px] h-[28px] text-white font-semibold p-2 rounded-full' style={{background:"rgb(255,56,92)"}}/>
                    </div>
                </button>
                <div className='flex justify-end items-center xl:w-2/5 md:w-1/2'>
                    <button className='max-lg:text-[10px]  rounded-full hover:bg-hoverbg p-3 leading-4'>在 Airbnb 上發布房源
                    </button>
                    <button className='rounded-full hover:bg-hoverbg p-3'>
                        <RiGlobalLine className='max-lg:text-[22px] text-[24px]'/>
                    </button>
                    <div>
                        <button className={`flex items-center gap-2 border border-bordergray rounded-full py-1 pr-1 pl-4 text-gray-700 hover:shadow-md z-25 ${memberActive && 'shadow-md'}`}
                        ref={buttonRef}
                        onClick={handleButtonClick}>
                            <AiOutlineMenu className='max-lg:text-lg text-2xl'/>
                            <IoPersonCircleSharp className='max-lg:text-[30px] text-[36px]' style={{color:"#717171"}}/>
                        </button>
                        <div className={`absolute md:w-[21%] lg:w-[17%] xl:w-[15%] 2xl:w-[12%]    rounded-xl bg-white right-[80px] max-xl:right-[40px] bottom-[-31%] z-20 py-2.5 border border-1 ${!memberActive && 'hidden'}`}
                        ref={divRef}
                        style={{ boxShadow: "9px -9px 18px #f5f5f5, -9px 9px 18px #ffffff" }}>
                            <div className='flex flex-col text-sm'>
                                <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5 font-semibold'>註冊</span>
                                <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5'>登入</span>
                                <div className='w-full h-[1px] border border-1 border-bordergray my-2'></div>
                                <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5'>在 Airbnb 上發布房源</span>
                                <span className='hover:bg-hoverbg cursor-pointer py-2.5 px-3.5'>說明中心</span>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
        <div className='py-8 padding flex items-center justify-between relative'>
            <button className={`absolute top-[30%] bg-white pt-3 pb-5 z-10 ${!showLeftButton && 'hidden'}`}
            onClick={scrollLeft}
            >
            <img className='p-0.5 border-2 rounded-full hover:shadow-md' src={leftArrow} width={30} height={30}/>
            </button>
            <FilterIconsOverFlow iconContainerRef={iconContainerRef}/>
            <button className={`absolute top-[30%] 2xl:left-[73.5%] xl:left-[67%] lg:left-[81%] md:left-[75%] pt-3 pb-5 bg-white  ${!showRightButton && 'hidden'}`}
            onClick={scrollRight}
            >
            <img src={rightArrow} className='p-0.5 border-2 rounded-full  hover:shadow-md' width={30} height={30}/>
            </button>
            <div className='flex gap-5 '>
                <FilterButton />
                <ToggleButton />
            </div>
        </div>
    </header>
  )
}

export default Nav