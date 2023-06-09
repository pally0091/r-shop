/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));

    // console.log(categories);
  }, []);
  return (
    <div className="overflow-y-scroll h-96">
      {categories?.map((category) => (
        <Link to={`/category/${category}`}>
          <button className="w-full my-1 bg-cyan-200 py-1 uppercase hover:bg-sky-700 hover:text-white transition-all duration-700">
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
