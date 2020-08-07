import React from "react";

function CommentItem(props) {
  return (
    <div className="comments__comment">
      <img
        className="comments__commentImage"
        src={props.commentData.image}
        alt=""
      />

      <div className="comments__commentTitle">
        <h3 className="comments__commentAuthor">{props.commentData.author}</h3>
        <h4 className="comments__commentDate">{props.commentData.date}</h4>
      </div>
      <p className="comments__commentText">{props.commentData.text}</p>
    </div>
  );
}

export default CommentItem;
