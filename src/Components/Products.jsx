/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { PuffLoader } from "react-spinners";

const Products = () => {
  const data = useLoaderData();
  const products = data.products;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // console.log(products);
  return (
    <div className="flex justify-center">
      {loading ? (
        <PuffLoader
          color="#eb8a8f"
          size={150}
        />
      ) : (
        <div className="grid grid-cols-3 gap-3 w-[98%] mt-4 mx-auto">
          {products?.map((product) => (
            <Product
              key={product.id}
              product={product}
            ></Product>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
