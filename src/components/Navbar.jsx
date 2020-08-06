import React from "react";
import logo from "../assets/logos/Logo-brainflix.svg";
import Btn from "./Btn";
import aviPhoto from "../assets/images/Mohan-muruge.jpg";

const Navbar = () => {
  return (
    <section className="navbar">
      <img src={logo} alt="brainflix logo" />
      <div className="navbar__searchArea">
        <form
          id="navbarSearchForm"
          class="navbar__searchForm"
          action=""
          method="post"
        >
          <input
            className="navbar__search"
            type="text"
            name="navbarSearchInput"
            required="required"
            placeholder="Search"
          />
          <Btn btnText="+ UPLOAD" />
        </form>
        <img className="navbar__aviPhoto" src={aviPhoto} alt="Mohan Muruge's" />
      </div>
    </section>
  );
};

export default Navbar;
