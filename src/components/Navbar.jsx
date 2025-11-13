import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import food_items from "../food";
import { useSelector } from "react-redux";
const Navbar = () => {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);
  let items = useSelector((state) => state.cart.items);
  console.log(items)
  return (
    <div className="w-full h-[70px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow-xl">
        <MdFastfood className="w-[25px] h-[25px] text-orange-500" />
      </div>
      <form
        action=""
        className="flex items-center bg-white w-[60%] h-[50px] px-5 gap-2 rounded-md shadow-md md:w-[60%] md:gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[25px] h-[25px] text-orange-500" />
        <input
          type="text"
          placeholder="Search your dish........"
          className="w-full outline-none text-[11px] md:text-[17px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-md shadow-xl relative cursor-pointer"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="absolute top-0 right-1 font-semibold text-orange-500 text-[15px]">
          {items.length}
        </span>
        <LuShoppingCart className="w-[25px] h-[25px] text-orange-500" />
      </div>
    </div>
  );
};

export default Navbar;
