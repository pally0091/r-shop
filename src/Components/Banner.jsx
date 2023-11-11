/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerItems = [
    {
      id: 14,
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    },
    {
      id: 16,
      title: "Hyaluronic Acid Serum",
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    },
    {
      id: 23,
      title: "Orange Essence Food Flavou",
      description:
        "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
  ];
  // console.log(bannerItems);
  return (
    <div className="grid grid-cols-2 gap-2 mt-2 py-1 px-2">
      {bannerItems.map((bannerItem) => (
        <div
          key={bannerItem.id}
          className="bg-red-100 border border-black p-2 rounded-md shadow-md shadow-amber-300 hover:shadow-none transition-all duration-500"
        >
          <h5 className="bg-white rounded-t-md shadow-md shadow-slate-600 text-lg font-semibold">
            {bannerItem.title}
          </h5>
          <div className="flex flex-row pt-2 border border-gray-800 rounded-b-md">
            <p className="w-2/3">{bannerItem.description}</p>
            <Link
              className="w-1/3"
              to={`/products/${bannerItem.id}`}
            >
              <div className="w-full h-32">
                <img
                  className="w-full h-full rounded-md"
                  src={bannerItem.thumbnail}
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
