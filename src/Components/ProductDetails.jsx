/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Logo.png";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const detail = useLoaderData();
  console.log(detail);
  return (
    <div>
      <div className="bg-red-400 p-5">
        <div className="w-32 mx-auto ring-2 ring-black p-1 rounded-full">
          <Link to="/">
            <img
              className="rounded-full hover:shadow-md hover:shadow-slate-700"
              src={logo}
              alt=""
            />
          </Link>
        </div>
      </div>

      {/* product card  */}
      <div className="mt-10 w-[70%] mx-auto shadow-lg shadow-red-400 p-8">
        <h2 className="text-3xl font-bold">{detail.title}</h2>
        <div className="flex flex-row gap-10 mt-10">
          <div className="w-1/2 border-2 border-black p-2 bg-sky-200">
            <img
              className="shadow-md shadow-slate-500"
              src={detail.thumbnail}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h4 className="text-justify my-5">{detail.description}</h4>
            <div className="flex justify-between my-4 border-b-2 border-dotted border-red-500">
              <p>{detail.category}</p>
              <p>{detail.brand}</p>
            </div>
            <div className="flex justify-around my-4 border-b-2 border-white">
              <p>Product Rating : {detail.ratiing}</p>
              <p>Stock : {detail.stock}</p>
            </div>
            <p>Price : {detail.price} $</p>
            <p>Discount : {detail.discountPercentage}%</p>
          </div>
        </div>
        <button className="bg-gradient-to-t from-sky-200 to-lime-300 w-full py-1 hover:bg-gradient-to-b my-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
