/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const { title, description, price, brand, thumbnail, id } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!", {
      position: "top-right",
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
    <div className="p-2 border border-black hover:shadow-inner hover:shadow-black hover:bg-amber-100 transition-all duration-700">
      <Link to={`/products/${id}`}>
        <div className="w-full h-48 mb-1">
          <img
            className="w-full h-full"
            src={thumbnail}
            alt=""
          />
        </div>
      </Link>
      <h3 className="text-lg font-bold my-1 uppercase">{title}</h3>
      <p className="text-justify my-1 h-28 overflow-hidden">{description}</p>
      <div className="flex flex-row justify-between">
        <p>Price : $ {price}</p>
        <p>{brand}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-gradient-to-t from-sky-200 to-lime-300 w-full py-1 hover:bg-gradient-to-b my-2"
      >
        Add to Cart
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Product;
