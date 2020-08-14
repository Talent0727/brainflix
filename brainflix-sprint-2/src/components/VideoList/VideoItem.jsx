import React, { Component } from "react";

class VideoItem extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // if (prevProps.match.params.videoID !== this.props.match.params.videoID) {
    //   this.props.searchVideoByVideoID(this.props.match.params.videoID);
    // }
  }
  render() {
    const { title, channel, image } = this.props.videoData;

    return (
      <li className="videos__video">
        <img className="videos__videoImage" src={image} alt="video" />
        <div className="videos__videoSideInfo">
          <h4 className="videos__videoTitle">{title}</h4>
          <p className="videos__videoChannel">{channel}</p>
        </div>
      </li>
    );
  }
}

export default VideoItem;
