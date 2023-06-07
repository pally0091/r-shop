/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState("");
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
                  <span className="text-lg text-black">Welcome </span> {user}
                </p>
                <button className="mx-4 bg-gradient-to-r from-red-400 to-red-600 px-3 py-2 rounded-xl shadow-lg shadow-white hover:shadow-none">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex">
                <button className="mx-4 bg-gradient-to-r from-green-400 to-green-600 px-3 py-2 rounded-xl shadow-lg shadow-white hover:shadow-none">
                  Login
                </button>
                <button className="mx-4 bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-2 rounded-xl shadow-lg shadow-white hover:shadow-none">
                  Signup
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
