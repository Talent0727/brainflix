import React from "react";
import CommentItem from "./CommentItem";

function CommentsSection(props) {
  //   console.log("CommentsSection props", props.comments);

  return (
    <div className="comments">
      {props.comments.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          name={comment.name}
          text={comment.text}
          date={comment.date}
        />
      ))}
    </div>
  );
}

export default CommentsSection;
