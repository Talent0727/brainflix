import React, { Component } from "react";
import IconViews from "../assets/icons/SVG/Icon-views.svg";
import IconLikes from "../assets/icons/SVG/Icon-likes.svg";
import moment from "moment";

moment().format();

class Description extends Component {
  render() {
    const unixDate = new Date(this.props.mainVideo.timestamp);
    const date = moment(unixDate).format("MM/DD/YYYY");
    const formattedTime = moment(date).fromNow();

    const { title, channel, views, likes, description } = this.props.mainVideo;

    return (
      <div className="description">
        <h1 className="description__title">{title}</h1>
        <div className="description__subtitle">
          <div className="description__subtitleTopRow">
            <h3 className="description__subtitleChannel">By {channel}</h3>
            <p className="description__subtitleDate">{formattedTime}</p>
          </div>
          <div className="description__subtitleBottomRow">
            <img className="description__subtitleIcon" src={IconViews} alt="" />
            <p className="description__subtitleNumbers">{views}</p>
            <img className="description__subtitleIcon" src={IconLikes} alt="" />
            <p className="description__subtitleNumbers">{likes}</p>
          </div>
        </div>
        <p className="description__text">{description}</p>
        <h4 className="description__numberOfComments">3 Comments</h4>
      </div>
    );
  }
}

export default Description;
