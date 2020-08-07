import React from "react";
import Btn from "../Btn";
import aviPhoto from "../../assets/images/Mohan-muruge.jpg";

function NewComment() {
  return (
    <div className="newComment">
      <img
        className="newComment__aviPhoto"
        src={aviPhoto}
        alt="Mohan Muruge's"
      />
      <form className="newComment__form" action="" method="post">
        <label className="newComment__label" htmlFor="">
          JOIN THE CONVERSATION
        </label>
        <textarea
          className="newComment__input"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <Btn btnText="COMMENT" />
      </form>
    </div>
  );
}

export default NewComment;
