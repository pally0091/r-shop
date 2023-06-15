/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const ProductDetails = () => {
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
      <div>
        <p>Product Card</p>
      </div>
    </div>
  );
};

export default ProductDetails;
