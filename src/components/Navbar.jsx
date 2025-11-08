import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className='w-full h-[70px] flex justify-between items-center px-5 md:px-8'>
       <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow-xl'>
          <MdFastfood className='w-[25px] h-[25px] text-orange-500'/>
       </div>
       <form action="" className='flex items-center bg-white w-[60%] h-[50px] px-5 gap-2 rounded-md shadow-md md:w-[60%] md:gap-5'>
        <IoSearch className='w-[25px] h-[25px] text-orange-500'/>
        <input type="text" placeholder='Search your dish........' className='w-full outline-none text-[11px] md:text-[17px]' />
       </form>
       <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-md shadow-xl relative'>
        <span className='absolute top-0 right-1 font-semibold text-orange-500 text-[15px]'>0</span>
         <LuShoppingCart className='w-[25px] h-[25px] text-orange-500'/>
       </div>
    </div>
  )
}

export default Navbar
