import React from "react";
import CommentItem from "./CommentItem";

function CommentsSection({ comments }) {
  if (!comments) {
    return "";
  }

  const commentList = comments.map((comment) => (
    <CommentItem
      key={comment.id}
      id={comment.id}
      name={comment.name}
      text={comment.comment}
      date={comment.timestamp}
    />
  ));

  return <div className="comments">{commentList}</div>;
}

export default CommentsSection;
