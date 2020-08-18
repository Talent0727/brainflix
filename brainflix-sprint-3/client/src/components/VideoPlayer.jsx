import React, { Component } from "react";
import PlayIcon from "../assets/icons/SVG/Icon-play.svg";
import ExpandIcon from "../assets/icons/SVG/Icon-fullscreen.svg";
import VolumeIcon from "../assets/icons/SVG/Icon-volume.svg";

class VideoPlayer extends Component {
  render() {
    const { image } = this.props.mainVideo;

    return (
      <>
        <div className="main-video__video-player">
          <div className="main-video__video-controls">
            <button className="main-video__btn-play">
              <img
                className="main-video__btn-playImg"
                src={PlayIcon}
                alt="play icon"
              />
            </button>
            <div className="main-video__progress-bar">
              <div className="main-video__progress-timeline">
                <div className="main-video__progress-scrubber"></div>
              </div>
              <div className="main-video__progress-text">0:00 / 0:42</div>
            </div>
            <div className="main-video__btn-group">
              <button className="main-video__btn-double">
                <img
                  className="main-video__btn-expand"
                  src={ExpandIcon}
                  alt="expand icon"
                />
                <img
                  className="main-video__btn-volume"
                  src={VolumeIcon}
                  alt="volume icon"
                />
              </button>
              {/* <button className="mainVideo__btn-double">
                
              </button> */}
            </div>
          </div>
          <video
            // controls
            className="main-video__video"
            poster={image}
            src={image}
          ></video>
        </div>
      </>
    );
  }
}

export default VideoPlayer;
