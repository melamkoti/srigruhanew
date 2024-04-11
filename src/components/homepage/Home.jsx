import React from "react";
import { homeData, SnacksData, PicklesData } from "./homedata";
import { AddCart } from "../CartSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  function handleDispatch(item) {
    dispatch(AddCart(item));
  }

  return (
    <div className="pb-20">
      <h2 className="text-center text-4xl py-16">SWEET</h2>
      <div className="flex flex-wrap  gap-8 m-8">
        {homeData.map((item, index) => (
          <div key={index} className="w-[300px] shadow-xl bg-white rounded-lg">
            <img src={item.image} className="w-full h-[200px] rounded-lg" />
            <h2 className="text-2xl py-4 pl-6 font-semibold">{item.item}</h2>
            <p className="p-4 overflow-hidden h-[90px]">{item.description}</p>
            <p className="font-bold px-3">
              <span className="px-2">RS.</span>
              {item.price}
            </p>
            <button
              onClick={() => handleDispatch(item)}
              className="bg-white text-orange-300 font-semibold  shadow-lg shadow-orange-200 rounded-sm px-6 py-2 m-4 "
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-4xl py-16 text-center">SNACKS</h2>
      <div className="flex flex-wrap gap-8 m-8">
        {SnacksData.map((item, index) => (
          <div key={index} className="w-[300px] shadow-xl bg-white rounded-lg ">
            <img src={item.image} className="w-full h-[200px] rounded-lg" />
            <h2 className="text-2xl py-4 pl-6 font-semibold">{item.item}</h2>
            <p className="p-4 overflow-hidden h-[90px]">{item.description}</p>
            <p className="font-bold px-3">
              <span className="px-2">RS.</span>
              {item.price}
            </p>
            <button
              onClick={() => handleDispatch(item)}
              className="bg-white text-orange-300 font-semibold  shadow-lg shadow-orange-200 rounded-sm px-6 py-2 m-4 "
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-center text-4xl py-16"> PICKLE </h2>
      <div className="flex flex-wrap gap-8 m-8">
        {PicklesData.map((item, index) => (
          <div key={index} className="w-[300px] shadow-xl bg-white rounded-lg ">
            <img src={item.image} className="w-full h-[200px] rounded-lg" />
            <h2 className="text-2xl py-4 pl-6 font-semibold">{item.item}</h2>
            <p className="p-4 overflow-hidden h-[90px]">{item.description}</p>
            <p className="font-bold px-3">
              <span className="px-2">RS.</span>
              {item.price}
            </p>
            <button
              onClick={() => {
                handleDispatch(item);
              }}
              className="bg-white text-orange-300 font-semibold  shadow-lg shadow-orange-200 rounded-sm px-6 py-2 m-4 "
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
