import React from "react";
import IconViews from "../assets/icons/SVG/Icon-views.svg";
import IconLikes from "../assets/icons/SVG/Icon-likes.svg";
import NewComment from "./CommentsSection/NewComment";

const Description = () => {
  return (
    <div className="description">
      <h1 className="description__title">BMX Rampage: 2018 Highlights</h1>
      <div className="description__subtitle">
        <div className="description__subtitleTopRow">
          <h3 className="description__subtitleChannel">By Red Cow</h3>
          <p className="description__subtitleDate">12/18/2018</p>
        </div>
        <div className="description__subtitleBottomRow">
          <img className="description__subtitleIcon" src={IconViews} alt="" />
          <p className="description__subtitleNumbers">1,001,023</p>
          <img className="description__subtitleIcon" src={IconLikes} alt="" />
          <p className="description__subtitleNumbers">110,985</p>
        </div>
      </div>
      <p className="description__text">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
      <h4 className="description__numberOfComments">3 Comments</h4>
      <NewComment />
    </div>
  );
};

export default Description;
