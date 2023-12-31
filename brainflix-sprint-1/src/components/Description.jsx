import React from "react";
import IconViews from "../assets/icons/SVG/Icon-views.svg";
import IconLikes from "../assets/icons/SVG/Icon-likes.svg";
import moment from "moment";

moment().format();

function Description(props) {
  // console.log(props.activeVideo);
  const formattedTime = moment(props.mainVideo.date).fromNow();

  // const formattedTime = new Date(props.mainVideo.date).toLocaleDateString();
  return (
    <div className="description">
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
