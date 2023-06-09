/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./Nav";
import { Link, Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import logo from "../assets/Logo.png";

const Main = () => {
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
      <div className="flex">
        <div className="w-[20%]">
          <SideNav></SideNav>
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
