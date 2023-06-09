/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const data = useLoaderData();
  const products = data.products;

  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-3 w-[98%] mt-4 mx-auto">
      {products?.map((product) => (
        <Product
          key={product.id}
          product={product}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
