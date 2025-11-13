import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify"; // ✅ Import toast

const Card = ({ name, image, id, price, type }) => {
  const dispatch = useDispatch();

  // Function to handle Add to Dish
  const handleAdd = () => {
    // Add item to Redux
    dispatch(AddItem({ id, name, price, image, qty: 1 }));

    // ✅ Show toast notification
    toast.success(`${name} added....`, {
      position: "top-right",
      autoClose: 2000,
      style: {
        background: "#ffffff",
        color: "black",
        fontWeight: "400",
        padding: "5px 5px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    });
  };

  return (
    <div className="w-[280px] h-[350px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-blue-300 cursor-pointer">
      {/* Image Section */}
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      {/* Food Name */}
      <div className="text-xl font-semibold text-gray-600">{name}</div>

      {/* Price & Type */}
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold text-orange-600">
          Rs {price}/-
        </div>
        <div className="flex items-center justify-center gap-1 font-semibold text-green-500">
          {type === "Veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      {/* Add Button */}
      <button
        className="w-full p-2 bg-blue-400 rounded-md shadow-xl text-white text-[15px] hover:bg-orange-400 cursor-pointer"
        onClick={handleAdd}
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
