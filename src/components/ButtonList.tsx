import React from "react";
import TubeButton from "./TubeButton";

const ButtonList = () => {
  const buttonList = [
    "all",
    "popular",
    "watched",
    "live",
    "game",
    "channel",
    "love",
    "war",
    "fight",
  ];
  return (
    <div className="flex p-3 m-3 justify-between ">
      {buttonList.map((item) => (
        <TubeButton title={item} />
      ))}
    </div>
  );
};

export default ButtonList;
