import React from "react";

function VideoItem(props) {
  return (
    <li className="videos__video">
      <img
        className="videos__videoImage"
        src={props.videoData.image}
        alt="video"
      />
      <div className="videos__videoSideInfo">
        <h4 className="videos__videoTitle">{props.videoData.title}</h4>
        <p className="videos__videoChannel">{props.videoData.channel}</p>
      </div>
    </li>
  );
}

export default VideoItem;
