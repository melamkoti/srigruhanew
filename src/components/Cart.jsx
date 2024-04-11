import React from "react";
import { useSelector } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "./CartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const productCart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  function handleRemove(item) {
    dispatch(RemoveItem(item));
  }

  function handlIncreaseQuantity(item) {
    dispatch(IncreaseQuantity(item));
  }
  function handleDecreaseItem(item) {
    dispatch(DecreaseQuantity(item));
  }
  return (
    <div>
      <div className="flex flex-col  gap-8 m-8">
        {productCart.map((item, index) => {
          return (
            <div
              key={index}
              className=" shadow-xl bg-white rounded-lg flex items-center justify-between px-4 gap-4 w-3/6 "
            >
              <div className="flex items-center justify-evenly">
                <img src={item.image} className="w-36 px-4 py-4 " />

                <h2 className="text-2xl py-4 pl-6 font-semibold">
                  {item.item}
                </h2>

                <p className="font-bold px-3">
                  <span className="px-2">RS.</span>
                  {item.price}
                </p>
              </div>
              <div className="border border-orange-300 rounded-3xl flex items-center gap-1 px-2 py-1 shadow-md">
                <button onClick={() => handleDecreaseItem(item)}>
                  <ion-icon name="remove-outline"></ion-icon>
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handlIncreaseQuantity(item)}>
                  <ion-icon name="add-outline"></ion-icon>
                </button>
              </div>
              <div className="font-semibold">
                Total: {item.totalAmount}
                <sub className="pl-1">rs</sub>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="text-3xl text-orange-500"
              >
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
