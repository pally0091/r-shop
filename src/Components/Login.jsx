/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-red-400 p-5">
        <div>LOGO</div>
      </div>
      <form
        action="submit"
        className="w-[45%] mx-auto bg-slate-400 p-10 rounded-md shadow-lg shadow-black mt-16"
      >
        <h3 className="text-xl font-bold my-3">Please Login to your account</h3>
        <div className="flex flex-col">
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-yellow-300"
            name="email"
            type="email"
            id=""
            placeholder="asc@xxxxxx.com"
          />
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-yellow-300"
            name="password"
            type="password"
            id=""
            placeholder="password"
          />
          <button
            className="bg-gradient-to-r from-lime-300 to-green-500 p-2 rounded-md hover:bg-gradient-to-l"
            type="submit"
          >
            Login
          </button>
        </div>
        <hr className="my-5" />
        <div>
          <button className="bg-gradient-to-r from-red-400 to-red-600 p-2 rounded-md hover:bg-gradient-to-l w-full">
            Login With Google
          </button>
          <h5 className=" font-semibold my-2">
            I have no account{" "}
            <Link
              className="hover:text-blue-800"
              to="/signup"
            >
              Register
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
