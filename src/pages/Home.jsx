import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../Categories";
import Card from "../components/Card";
import food_items from "../food";

const Home = () => {
  let [cate, setCate] = useState(food_items);

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
    </div>
  );
};

export default Home;
