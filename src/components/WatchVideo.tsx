import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { closeSidebar } from "../redux/feature/header/headerSlice";
import CommentsContainer from "./CommentsContainer";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className="p-3 ">
      <iframe
        className="rounded-lg"
        width="1200"
        height="600"
        src={`https://www.youtube.com/embed/${searchParams.get(
          "v"
        )}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default WatchVideo;
