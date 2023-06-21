/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import logo from "../assets/Logo.png";
import { Link, useLoaderData } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    title,
    thumbnail,
    description,
    category,
    brand,
    ratiing,
    stock,
    price,
    discountPercentage,
  } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  console.log(product);
  return (
    <div>
      <div className="flex flex-row items-end bg-gradient-to-b from-red-400 to-amber-400 p-5">
        <div className="w-32 mx-auto ring-2 ring-black p-1 rounded-full">
          <Link to="/">
            <img
              className="rounded-full hover:shadow-md hover:shadow-slate-700"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <p className="text-xl bg-white p-1 rounded-md mx-2 hover:bg-black ">
              🛒{" "}
            </p>
          </Link>
        </div>
      </div>

      {/* product card  */}
      <div className="mt-10 w-[70%] mx-auto shadow-lg shadow-red-400 p-8">
        <h2 className="text-3xl font-bold uppercase">{title}</h2>
        <div className="flex flex-row gap-10 mt-10">
          <div className="w-1/2 border-2 border-black p-2 bg-sky-200 h-72">
            <img
              className="shadow-md shadow-slate-500 w-full h-full"
              src={thumbnail}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h4 className="text-justify my-5">{description}</h4>
            <div className="flex justify-between uppercase my-4 border-b-2 border-dotted border-red-500">
              <p>{category}</p>
              <p>{brand}</p>
            </div>
            <div className="flex justify-around my-4 border-b-2 border-white">
              <p>Product Rating : {ratiing}</p>
              <p>Stock : {stock}</p>
            </div>
            <p>Price : {price} $</p>
            <p>Discount : {discountPercentage}%</p>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-gradient-to-t from-sky-200 to-lime-300 w-full py-1 hover:bg-gradient-to-b my-2"
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetails;
