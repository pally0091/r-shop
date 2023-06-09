/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  const products = data.products;

  console.log(products);
  return (
    <div>
      <p>products </p>
    </div>
  );
};

export default Products;
