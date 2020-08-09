import React from "react";
import VideoPoster from "../assets/images/video-list-0.jpg";
import PlayIcon from "../assets/icons/SVG/Icon-play.svg";
import ExpandIcon from "../assets/icons/SVG/Icon-fullscreen.svg";
import VolumeIcon from "../assets/icons/SVG/Icon-volume.svg";

function VideoPlayer(props) {
  return (
    <>
      <div className="mainVideo__videoPlayer">
        <div className="mainVideo__videoControls">
          <button className="mainVideo__videoBtn">
            <img src={PlayIcon} alt="play icon" />
          </button>
          <div className="mainVideo__videoProgress-bar">
            <div className="mainVideo__videoProgress-timeline">
              <div className="mainVideo__videoProgress-scrubber"></div>
            </div>
            <div className="mainVideo__videoProgress-text">0:00 / 0:42</div>
          </div>
          <div className="mainVideo__videoBtn-group">
            <button className="mainVideo__videoBtn">
              <img src={ExpandIcon} alt="expand icon" />
            </button>
            <button className="mainVideo__videoBtn">
              <img src={VolumeIcon} alt="volume icon" />
            </button>
          </div>
        </div>
        <video
          // controls
          className="mainVideo__video"
          poster={VideoPoster}
          src={props.mainVideo.video}
        ></video>
      </div>
    </>
  );
}

export default VideoPlayer;
