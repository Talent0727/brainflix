import React from "react";
import aviPhoto from "../../assets/images/Mohan-muruge.jpg";

function NewComment({ submitMessage, error }) {
  return (
    <div className="new-comment">
      <h3 className="new-comment__label">JOIN THE CONVERSATION</h3>
      <div className="new-comment__container">
        <img
          className="new-comment__avi-photo"
          src={aviPhoto}
          alt="Mohan Muruge"
        />
        <div>{error}</div>
        <form className="new-comment__form" onSubmit={submitMessage}>
          <textarea
            className="new-comment__input"
            name="message"
            placeholder="Write comment here"
            cols="30"
            rows="10"
          ></textarea>
          <button className="new-comment__btn" type="submit">
            COMMENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewComment;
