import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin5Line } from "react-icons/ri";
const CartCard = () => {
  return (
    <div className="w-full h-[120px]  rounded-md p-4 flex justify-between  bg-white shadow-md">
      <div className="w-[65%] h-full  flex gap-5 ">
        <div className=" h-full md:w-[60%] overflow-hidden rounded-md shadow-md">
          <img src={image1} alt="" className="object-cover" />
        </div>
        <div className="w-[30%] h-full flex flex-col justify-between ">
          <div className=" text-5 md:text-lg text-gray-600 font-semibold">
            Pancakes
          </div>
          <div className=" w-18 md:w-20 h-8 bg-slate-400 flex rounded-lg overflow-hidden shadow-md border-orange-600 border-2">
            <button className="w-[33%] h-full bg-white flex justify-center items-center text-[25px]">
              -
            </button>
            <span className="w-[34%] h-full bg-blue-400 flex justify-center items-center text-white">
              1
            </span>
            <button className="w-[33%] h-full bg-white flex justify-center items-center text-[20px]">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end ">
        <span className=" text-[13px] md:text-lg font-semibold *: text-orange-400">
          Rs 499/-
        </span>
        <RiDeleteBin5Line className="w-5 md:w-[25px] h-[25px] text-red-500" />
      </div>
    </div>
  );
};

export default CartCard;
