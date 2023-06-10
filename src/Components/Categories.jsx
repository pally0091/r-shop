/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const Categories = () => {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
    // console.log(categories);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex justify-center">
      {loading ? (
        <SyncLoader
          color="#eb8a8f"
          margin={5}
          size={25}
        />
      ) : (
        <div className="overflow-y-scroll h-96">
          {categories?.map((category) => (
            <Link to={`/category/${category}`}>
              <button className="w-full my-1 bg-cyan-200 py-1 uppercase hover:bg-sky-700 hover:text-white transition-all duration-700">
                {category}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
