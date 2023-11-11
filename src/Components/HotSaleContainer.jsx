/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const HotSaleContainer = () => {
  const hotsales = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    },
    {
      id: 19,
      title: "Skin Beauty Serum.",
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: 46,
      discountPercentage: 10.68,
      rating: 4.42,
      stock: 54,
      brand: "ROREC White Rice",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
    },
  ];

  return (
    <div className="h-80 bg-blue-300 py-10 px-5">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        dynamicHeight={true}
        emulateTouch={true}
        stopOnHover={true}
        swipeable={true}
      >
        {hotsales.map((product) => (
          <div
            key={product.id}
            className="flex flex-row items-center  "
          >
            <div className="w-1/2 px-2">
              <Link to={`/products/${product.id}`}>
                <div className="w-full h-64 ">
                  <img
                    className="w-full h-full rounded-md"
                    src={product.thumbnail}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="w-1/2 p-4">
              <h3 className="text-lg font-bold my-1 uppercase">
                {product.title}
              </h3>
              <p className="text-justify my-1 h-28 overflow-hidden">
                {product.description}
              </p>
              <div className="flex flex-row justify-evenly">
                <p>Price : $ {product.price}</p>
                <p>{product.brand}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HotSaleContainer;
