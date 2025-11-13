import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, RemoveItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartCard = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(RemoveItem(id));
    toast.error(`${name} deleted.....`, {
      position: "top-right",
      autoClose: 2000,
      style: {
        background: "#ffffff",
        color: "black",
        fontWeight: "300",
        padding: "5px 5px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    });
  };

  return (
    <div className="w-full h-[120px] rounded-md p-4 flex justify-between bg-white shadow-md">
      <div className="w-[60%] md:w-[65%] h-full flex gap-5">
        <div className="md:w-[60%] overflow-hidden rounded-md shadow-md">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <div className="w-[10%] md:w-[35%] h-full flex flex-col justify-between">
          <div className="text-[11px] md:text-[16px] text-gray-600 font-semibold">
            {name}
          </div>
          <div className="w-18 md:w-20 h-8 bg-slate-400 flex rounded-lg overflow-hidden shadow-md border-orange-600 border-2">
            <button
              onClick={() => dispatch(decrementQty(id))}
              className="w-[33%] h-full bg-white flex justify-center items-center text-[25px] cursor-pointer"
            >
              -
            </button>
            <span className="w-[34%] h-full bg-blue-400 flex justify-center items-center text-white">
              {qty}
            </span>
            <button
              onClick={() => dispatch(incrementQty(id))}
              className="w-[33%] h-full bg-white flex justify-center items-center text-[20px] cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-[13px] md:text-lg font-semibold text-orange-400">
          Rs {price * qty}/-
        </span>
        <RiDeleteBin5Line
          className="w-5 md:w-[25px] h-[25px] text-red-500 cursor-pointer hover:scale-110 transition-all duration-200"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default CartCard;
