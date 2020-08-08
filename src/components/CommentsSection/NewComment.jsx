import React from "react";
import aviPhoto from "../../assets/images/Mohan-muruge.jpg";

function NewComment({ submitMessage }) {
  return (
    <div className="newComment">
      <img
        className="newComment__aviPhoto"
        src={aviPhoto}
        alt="Mohan Muruge's"
      />
      <form className="newComment__form" onSubmit={submitMessage}>
        <label className="newComment__label" htmlFor="">
          JOIN THE CONVERSATION
        </label>
        <textarea
          className="newComment__input"
          name="message"
          id=""
          placeholder="Write comment here"
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn" type="submit">
          COMMENT
        </button>
      </form>
    </div>
  );
}

export default NewComment;
