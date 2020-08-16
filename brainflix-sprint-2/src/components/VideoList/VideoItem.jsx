import React, { Component } from "react";

class VideoItem extends Component {
  render() {
    const { title, channel, image } = this.props.videoData;

    return (
      <li className="videos__video">
        <img className="videos__video-image" src={image} alt="video" />
        <div className="videos__video-sideInfo">
          <h4 className="videos__video-title">{title}</h4>
          <p className="videos__video-channel">{channel}</p>
        </div>
      </li>
    );
  }
}

export default VideoItem;
