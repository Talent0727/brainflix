import React from "react";

function CommentItem({ id, image, name, date, text }) {
  const formattedTime = new Date(date).toLocaleDateString();
  return (
    <div className="comments__comment" id={id}>
      <img className="comments__commentImage" src={image} alt="" />
      <div className="comments__commentData">
        <div className="comments__commentTitle">
          <h3 className="comments__commentAuthor">{name}</h3>
          <h4 className="comments__commentDate">{formattedTime}</h4>
        </div>
        <p className="comments__commentText">{text}</p>
      </div>
    </div>
  );
}

export default CommentItem;
