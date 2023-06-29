/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./Nav";
import { Link, Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import logo from "../assets/Logo.png";
import RandomItem from "./RandomItem";

const Main = () => {
  return (
    <div>
      <div className="flex flex-row items-end bg-gradient-to-b from-red-400 to-amber-400 p-5">
        <div className="w-32 mx-auto ring-2 ring-black p-1 rounded-full">
          <Link to="/">
            <img
              className="rounded-full hover:shadow-md hover:shadow-slate-700"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <p className="text-xl bg-white p-1 rounded-md mx-2 hover:bg-black ">
              🛒{" "}
            </p>
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="w-[20%]">
          <SideNav></SideNav>
          <RandomItem></RandomItem>
        </div>
        <div className="w-[80%]">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
