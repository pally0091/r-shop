/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { AuthContext } from "./Context";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const { createUser, loading, setLoading, googleLogin } =
    useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  if (currentUser) {
    navigate("/");
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    try {
      const { user } = await createUser(email, password);

      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleSignup = async (e) => {
    try {
      const { user } = await googleLogin();
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="bg-blue-400 p-5">
        <div className="w-32 mx-auto ring-2 ring-black p-1 rounded-full">
          <Link to="/">
            <img
              className="rounded-full hover:shadow-md hover:shadow-slate-700"
              src={logo}
              alt=""
            />
          </Link>
        </div>
      </div>
      <form
        className="w-[45%] mx-auto bg-green-200 p-10 rounded-md shadow-lg shadow-black mt-16"
        action="submit"
        onSubmit={handleSignup}
      >
        <h3 className="text-xl font-bold my-3">
          Register here for your account{" "}
        </h3>
        <div className="flex flex-col">
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-sky-400"
            name="name"
            type="text"
            id="name"
            placeholder="A. Jackob"
            required
          />
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-sky-400"
            name="email"
            type="email"
            id="email"
            placeholder="asc@xxxxxx.com"
            required
          />
          <input
            className="my-5 text-xl p-2 rounded-md focus:shadow-md focus:shadow-sky-400"
            name="password"
            type="password"
            id="password"
            placeholder="password"
            required
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
          <button
            onClick={handleGoogleSignup}
            className="bg-gradient-to-r from-red-400 to-red-600 p-2 rounded-md hover:bg-gradient-to-l w-full"
          >
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
