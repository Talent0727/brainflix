import React from "react";
import aviPhoto from "../../assets/images/Mohan-muruge.jpg";

function NewComment({ submitMessage }) {
  return (
    <div className="newComment">
      <h3 className="newComment__label">JOIN THE CONVERSATION</h3>
      <div className="newComment__container">
        <img
          className="newComment__aviPhoto"
          src={aviPhoto}
          alt="Mohan Muruge"
        />
        <form className="newComment__form" onSubmit={submitMessage}>
          <textarea
            className="newComment__input"
            name="message"
            placeholder="Write comment here"
            cols="30"
            rows="10"
          ></textarea>
          <button className="newComment__btn" type="submit">
            COMMENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewComment;
