import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { YOU_TUBE_API } from "../constant";
import { Link } from "react-router";

const VideoContainer = () => {
  const [vides, setVideos] = useState([]);
  useEffect(() => {
    const getYOutube = async () => {
      const data = await fetch(YOU_TUBE_API);
      console.log(data, "response.");
      const jsonData = await data.json();
      setVideos(jsonData.items);
    };
    getYOutube();
  }, []);
  console.log(vides, "vides");
  return (
    <div className="flex flex-wrap hover:cursor-pointer">
      {vides &&
        vides.map((video) => (
          <Link to={`watch?v=${video.id}`}>
            <ItemCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
