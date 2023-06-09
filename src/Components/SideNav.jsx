/* eslint-disable no-unused-vars */
import React from "react";
import Categories from "./Categories";

const SideNav = () => {
  return (
    <div>
      <h6 className="font-bold italic text-xl p-1 bg-blue-400 ">
        All Categories
      </h6>
      <Categories></Categories>
    </div>
  );
};

export default SideNav;
