/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, calculateTotalPrice } =
    useContext(CartContext);
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    toast.error("Product removed from Cart!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="w-10/12 flex flex-row border mx-auto h-auto mt-14 bg-stone-200">
      <div className="w-[70%] p-2">
        <h2 className="my-5 text-3xl">Here is Your Cart </h2>
        {cartItems.length === 0 ? (
          <p>Cart Is Emply</p>
        ) : (
          <>
            <p>Your Cart have {cartItems.length} items</p>
            {cartItems?.map((item) => (
              <div
                className="bg-white w-full mx-auto p-3 rounded-md border-4 border-blue-600 border-double flex justify-evenly items-center my-3"
                key={item.id}
              >
                <div className="w-[10%]">
                  <img
                    className="w-full h-full"
                    src={item.thumbnail}
                    alt=""
                  />
                </div>
                <div className="flex w-[70%] justify-between">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="font-semibold text-gray-600">$ {item.price}</p>
                </div>
                <button
                  className="text-red-600 text-2xl w-[10%]"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  X
                </button>
                <ToastContainer></ToastContainer>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="w-[30%] border-4 p-1 border-l-red-600 border-double">
        <p className="text-lg">Total Price : $ {calculateTotalPrice()}</p>
        <button className="bg-sky-400 px-5 py-2 rounded-md hover:bg-sky-200 my-4 mx-2">
          Checkout
        </button>
        <button
          className="bg-red-400 px-5 py-2 rounded-md hover:bg-red-200 my-4 mx-2"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
