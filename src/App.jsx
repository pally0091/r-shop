import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

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
      ],
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
