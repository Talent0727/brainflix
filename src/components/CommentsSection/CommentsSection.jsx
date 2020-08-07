import React from "react";
import CommentItem from "./CommentItem";

function CommentsSection(props) {
  console.log("CommentsSection props", props.comments);

  return (
    <div className="comments">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} commentData={comment} />
      ))}
    </div>
  );
}

export default CommentsSection;
