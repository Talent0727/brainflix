import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  console.log("VideoList props", props.videos);

  return (
    <ul className="videoList">
      {props.videos.map((video) => (
        <VideoItem key={video.id} videoData={video} />
      ))}
    </ul>
  );
}

export default VideoList;
