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
      <form
        className="w-[45%] mx-auto bg-green-200 p-10 rounded-md shadow-lg shadow-black mt-16"
        action="submit"
      >
        <h3 className="text-xl font-bold my-3">
          Register here for your account{" "}
        </h3>
        <div className="flex flex-col">
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-sky-400"
            name="name"
            type="text"
            id=""
            placeholder="A. Jackob"
          />
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-sky-400"
            name="email"
            type="email"
            id=""
            placeholder="asc@xxxxxx.com"
          />
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-sky-400"
            name="password"
            type="password"
            id=""
            placeholder="password"
          />
          <button
            className="bg-gradient-to-r from-blue-300 to-sky-500 p-2 rounded-md hover:bg-gradient-to-l"
            type="submit"
          >
            Register
          </button>
        </div>
        <hr className="my-5 border-black" />
        <div>
          <button className="bg-gradient-to-r from-red-400 to-red-600 p-2 rounded-md hover:bg-gradient-to-l w-full">
            Register With Google
          </button>
          <h5 className=" font-semibold my-2">
            I have account{" "}
            <Link
              className="hover:text-blue-800"
              to="/login"
            >
              Login
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Signup;
