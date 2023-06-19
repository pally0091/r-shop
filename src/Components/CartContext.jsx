/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CartContext.js

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
