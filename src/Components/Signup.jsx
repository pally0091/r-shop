/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Signup = () => {
  return (
    <div>
      <div className="bg-red-400 p-5">
        <div className="w-32 mx-auto ring-2 p-1 rounded-full">
          <Link to="/">
            <img
              className="rounded-full"
              src={logo}
              alt=""
            />
          </Link>
        </div>
      </div>
      <h1>register</h1>
    </div>
  );
};

export default Signup;
