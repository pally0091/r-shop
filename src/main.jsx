import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./Components/Context.jsx";
import { CartProvider } from "./Components/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <CartProvider>
        <App />
      </CartProvider>
    </Context>
  </React.StrictMode>
);
