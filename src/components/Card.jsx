import React from 'react'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChickenOven } from "react-icons/gi";

const Card = ({name,image,id,price,type}) => {
  return (
    <div className='w-[280px] h-[350px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-blue-300 cursor-pointer'>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
         <img src={image} alt="" className='object-cover' />
      </div>
      <div className='text-xl font-semibold text-gray-600'>
         {name}
      </div>
      <div className='w-full flex justify-between items-center'>
         <div className='text-xl font-semibold text-orange-500'>Rs {price}/-</div>
         <div className='flex items-center justify-center gap-1 text-green-500 font-semibold'>{type==="Veg"?<LuLeafyGreen/>:<GiChickenOven />} <span>{type}</span></div>
      </div>
      <button className='w-full p-2 bg-blue-400 rounded-md shadow-xl text-white text-[15px] hover:bg-orange-400'>Add to Dish</button>
    </div>
  )
}

export default Card
