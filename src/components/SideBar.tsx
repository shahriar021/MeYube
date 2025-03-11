import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const SideBar = () => {
  const store = useSelector((store) => store.header.toggleToBody);

  if (!store) return;

  return (
    <div className="p-3   w-[120px]  h-full">
      <ui>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subsciption</li>
      </ui>
      <h1 className="pt-4">You</h1>
      <ui>
        <li>History</li>
        <li>Watch Later</li>
        <li>Playlist</li>
      </ui>
      <h1 className="pt-4">Subscription</h1>
      <ui>
        <li>Chanel 24</li>
        <li>Shorts</li>
        <li>Subsciption</li>
      </ui>
    </div>
  );
};

export default SideBar;
