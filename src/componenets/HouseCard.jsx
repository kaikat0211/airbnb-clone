import React, { useState } from 'react'
import { house1 } from '../assets/images'
import { AiFillStar} from 'react-icons/ai'
import { heart } from '../assets/icons'
import { redHeart } from '../assets/icons'

const HouseCard = ({src, country, rating, distance, date, price}) => {
    const [liked, setLiked] = useState(false)
  return (
    <div className='w-[305px] cursor-pointer'>
        <div className='h-[290px] relative'>
            <img src={ src } className='object-cover w-full h-full rounded-xl'/>
            <img src={ liked ? redHeart : heart } width={25} height={20} className='absolute top-3 right-3 z-5 ' onClick={()=> setLiked(!liked) }/>
        </div>
        <div className='flex justify-between w-full mt-3'>
            <span>{country}</span>
            <span className='flex items-center gap-2'><AiFillStar />{rating}</span>
        </div>
        <div className=' text-gray-400'>
            <div>距離 {distance} 公里</div>
            <div>{date}</div>
        </div>
        <div className='mt-1'>$ {price} TWD 晚</div>
    </div>
  )
}

export default HouseCard