/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Main = () => {
  return (
    <div>
      <div className="bg-red-400 p-5">
        <div>LOGO</div>
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
