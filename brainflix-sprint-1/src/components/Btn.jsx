import React from "react";

function Btn(props) {
  return (
    <button className="btn" type="submit">
      {props.btnText}
    </button>
  );
}

export default Btn;
