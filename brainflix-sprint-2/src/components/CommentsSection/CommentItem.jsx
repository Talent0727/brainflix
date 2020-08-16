import React from "react";
import moment from "moment";

moment().format();

function CommentItem({ id, image, name, date, text }) {
  // const formattedTime = new Date(date).toLocaleDateString();
  const formattedTime = moment(date).fromNow();

  return (
    <div className="comments__comment" id={id}>
      <img className="comments__comment-image" src={image} alt="" />
      <div className="comments__comment-data">
        <div className="comments__comment-title">
          <h3 className="comments__comment-author">{name}</h3>
          <h4 className="comments__comment-date">{formattedTime}</h4>
        </div>
        <p className="comments__comment-text">{text}</p>
      </div>
    </div>
  );
}

export default CommentItem;
