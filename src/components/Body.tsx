import React from "react";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import WatchVideo from "./WatchVideo";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
