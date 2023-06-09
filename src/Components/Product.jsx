/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Product = ({ product }) => {
  const { title, description, price, brand, thumbnail } = product;
  return (
    <div className="p-2 border border-black hover:shadow-inner hover:shadow-black hover:bg-sky-100 transition-all duration-700">
      <div className="w-full h-48 mb-1">
        <img
          className="w-full h-full"
          src={thumbnail}
          alt=""
        />
      </div>
      <h3 className="text-lg font-bold my-1">{title}</h3>
      <p className="text-justify my-1 h-28 overflow-hidden">{description}</p>
      <div className="flex flex-row justify-between">
        <p>Price : $ {price}</p>
        <p>{brand}</p>
      </div>
      <button className="bg-gradient-to-t from-sky-200 to-lime-300 w-full py-1 hover:bg-gradient-to-b my-2">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
