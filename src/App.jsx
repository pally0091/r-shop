import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/category/:id",
          element: <Products></Products>,
          loader: ({ params }) =>
            fetch(`https://dummyjson.com/products/category/${params.id}`),
        },
      ],
    },
    {
      path: "/cart",
      element: (
        <PrivateRoute>
          <Cart></Cart>
        </PrivateRoute>
      ),
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
    {
      path: "/products/:id",
      element: <ProductDetails></ProductDetails>,
      loader: ({ params }) =>
        fetch(`https://dummyjson.com/products/${params.id}`),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
