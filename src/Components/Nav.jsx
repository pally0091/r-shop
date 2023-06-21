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
      <div className="flex justify-end py-5 px-10 bg-gradient-to-b from-amber-400 to-red-400 shadow-inner shadow-black">
        <div className="flex items-center">
          <div>
            {user ? (
              <div className="flex items-center">
                <p className="text-lg font-bold mx-2">Welcome</p>
                <div className="mx-2  hover:bg-slate-200 p-2 transition-all duration-700">
                  <p className="text-lg text-right italic font-semibold border-b border-black">
                    {user.displayName ? user.displayName : "N/A"}
                  </p>
                  <p className="text-xs">{user.email}</p>
                </div>
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
