import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Categories from "../Categories";
import Card from "../components/Card";
import food_items from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { LuShoppingCart } from "react-icons/lu";
import { toast } from "react-toastify";

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  // Category filter
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

  // Redux cart items
  let items = useSelector((state) => state.cart.items);

  // Calculate price details
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryfee = 30;
  let taxes = Math.round((subtotal * 0.4) / 100);
  let total = subtotal + deliveryfee + taxes;

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Navbar />

      {/* Category Section */}
      {!input ? (
        <div className="flex justify-center items-center gap-3 flex-wrap w-full">
          {Categories.map((item) => (
            <div
              key={item.name}
              className="w-[140px] h-[140px] bg-white rounded-md flex flex-col items-center justify-center gap-3 shadow-md font-semibold text-[18px] text-gray-600 hover:bg-blue-200 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              {item.name}
              {item.icon}
            </div>
          ))}
        </div>
      ) : null}

      {/* Food Cards */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-4 pb-8">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
              id={item.id}
            />
          ))
        ) : (
          <p className="text-blue-500 text-lg font-semibold ">
            No food found! Try searching something else.
          </p>
        )}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-full md:w-[38vw] h-full bg-white fixed top-0 right-0 shadow-xl p-5 transition-all duration-500 flex flex-col gap-3 overflow-auto ${
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

        {/* Cart Items */}
        {items.length === 0 ? (
          <p className="text-blue-500 mt-5 text-xl flex justify-center items-center gap-2 font-semibold">
            Your Cart is Empty <LuShoppingCart className="w-5 h-5 text-blue-500" />
          </p>
        ) : (
          <>
            {items.map((item) => (
              <CartCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}

            {/* Price Section */}
            <div className="w-full border-t-2 border-gray-500 flex flex-col p-2 border-b-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Subtotal</span>
                <span className="text-blue-400 font-semibold">
                  Rs {subtotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Delivery Fee</span>
                <span className="text-blue-400 font-semibold">
                  Rs {deliveryfee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Taxes</span>
                <span className="text-blue-400 font-semibold">
                  Rs {taxes}/-
                </span>
              </div>
            </div>

            {/* Total Section */}
            <div className="border-gray-400 p-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Total</span>
                <span className="text-blue-400 font-semibold">
                  Rs {total}/-
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full p-2 bg-blue-400 rounded-md shadow-xl text-white text-[15px] hover:bg-orange-400 cursor-pointer" onClick={()=>{
              toast.success("Order Placed.....")
            }}>
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
