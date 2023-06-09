import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Products from "./Components/Products";

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
        },
      ],
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
