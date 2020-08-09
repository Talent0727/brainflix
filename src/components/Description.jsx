import React from "react";
import IconViews from "../assets/icons/SVG/Icon-views.svg";
import IconLikes from "../assets/icons/SVG/Icon-likes.svg";
import VideoPoster from "../assets/images/video-list-0.jpg";
import PlayIcon from "../assets/icons/SVG/Icon-play.svg";
import ExpandIcon from "../assets/icons/SVG/Icon-fullscreen.svg";
import VolumeIcon from "../assets/icons/SVG/Icon-volume.svg";

function Description(props) {
  // console.log(props.activeVideo);

  const formattedTime = new Date(props.mainVideo.date).toLocaleDateString();
  return (
    <div className="description">
      <div className="description__videoPlayer">
        <div className="description__videoControls">
          <button className="description__videoBtn">
            <img src={PlayIcon} alt="play icon" />
          </button>
          <div className="description__videoProgress-bar">
            <div className="description__videoProgress-timeline">
              <div className="description__videoProgress-scrubber"></div>
            </div>
            <div className="description__videoProgress-text">0:00 / 0:42</div>
          </div>
          <div className="description__videoBtn-group">
            <button className="description__videoBtn">
              <img src={ExpandIcon} alt="expand icon" />
            </button>
            <button className="description__videoBtn">
              <img src={VolumeIcon} alt="volume icon" />
            </button>
          </div>
        </div>
        <video
          // controls
          className="description__video"
          poster={VideoPoster}
          src={props.mainVideo.video}
        ></video>
      </div>
      <h1 className="description__title">{props.mainVideo.title}</h1>
      <div className="description__subtitle">
        <div className="description__subtitleTopRow">
          <h3 className="description__subtitleChannel">
            By {props.mainVideo.author}
          </h3>
          <p className="description__subtitleDate">{formattedTime}</p>
        </div>
        <div className="description__subtitleBottomRow">
          <img className="description__subtitleIcon" src={IconViews} alt="" />
          <p className="description__subtitleNumbers">
            {props.mainVideo.views}
          </p>
          <img className="description__subtitleIcon" src={IconLikes} alt="" />
          <p className="description__subtitleNumbers">
            {props.mainVideo.likes}
          </p>
        </div>
      </div>
      <p className="description__text">{props.mainVideo.description}</p>
      <h4 className="description__numberOfComments">3 Comments</h4>
    </div>
  );
}

export default Description;
