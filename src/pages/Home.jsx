import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../Categories";
import Card from "../components/Card";
import food_items from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import CartCard from "../components/CartCard";

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Navbar />
      {!input ? (
        <div className="flex justify-center items-center gap-3 flex-wrap w-full">
          {Categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[140px] bg-white rounded-md flex flex-col items-center justify-center gap-3 shadow-md font-semibold text-[18px] text-gray-600 hover:bg-blue-200 cursor-pointer transition-all duration-200 "
                onClick={() => filter(item.name)}
              >
                {item.name}
                {item.icon}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-4 pb-8">
        {cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
            id={item.id}
          />
        ))}
      </div>
      <div
        className={` w-full md:w-[35vw] h-full bg-white fixed top-0 right-0 shadow-xl p-5 transition-all duration-500 flex flex-col gap-5 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center">
          <span className="text-orange-600 text-[16px] font-semibold">
            Order Items
          </span>
          <RxCross2
            className="text-orange-600 w-[30px] h-5 cursor-pointer hover:text-gray-600"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </header>
        <CartCard />
      </div>
    </div>
  );
};

export default Home;
