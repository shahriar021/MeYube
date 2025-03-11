import React from "react";

function ItemCard({ info }: any) {
  return (
    <div className="p-3 m-2 w-72 shadow-sm rounded-sm">
      <img src={info?.snippet?.thumbnails?.high?.url} alt="thumbnails" />
      <p className="font-bold p-2">{info?.snippet?.title}</p>
      <p className="text-gray-400 p-2">{info?.snippet?.channelTitle}</p>
      <div className="flex gap-2">
        <p className="text-gray-400 px-2">{info?.statistics?.viewCount}</p>
        <p className="text-gray-400 ">
          {info?.snippet?.publishedAt?.slice(0, 10)}
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
