import React from "react";

function VideoItem(props) {
  return (
    <li className="videos__video">
      <img
        className="videos__videoImage"
        src={props.videoData.image}
        alt="video"
      />
      <h3 className="videos__videoTitle">{props.videoData.title}</h3>
      <p className="videos__videoChannel">{props.videoData.channel}</p>
    </li>
  );
}

export default VideoItem;
