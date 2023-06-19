/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context";

const Nav = () => {
  // const [user, setUser] = useState("");
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .cath((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-between py-5 px-10 bg-yellow-400 shadow-inner shadow-black">
        <div>Menus</div>
        <div className="flex items-center">
          <div>
            <Link to="/cart">
              <p className="mx-2">Cart Link</p>
            </Link>
          </div>
          <div>
            {user ? (
              <div className="flex items-center">
                <p className="mx-2 font-bold text-xl text-lime-600">
                  {" "}
                  <span className="text-lg text-black">Welcome </span>{" "}
                  {user.displayName}
                </p>
                <button
                  onClick={handleLogout}
                  className="mx-4 bg-gradient-to-r from-red-400 to-red-600 px-3 py-2 rounded-xl shadow-lg shadow-white hover:shadow-none"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex">
                <Link to="/login">
                  <button className="mx-4 bg-gradient-to-r from-green-400 to-green-600 px-3 py-2 rounded-xl shadow-lg shadow-white hover:shadow-none">
                    Login
                  </button>
                </Link>
                <Link to="./signup">
                  <button className="mx-4 bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-2 rounded-xl shadow-lg shadow-white hover:shadow-none">
                    Signup
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
