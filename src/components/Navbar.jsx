import React from "react";
import logo from "../assets/logos/Logo-brainflix.svg";
import Btn from "./Btn";
import aviPhoto from "../assets/images/Mohan-muruge.jpg";

const Navbar = () => {
  return (
    <section className="navbar">
      <img className="navbar__logo" src={logo} alt="brainflix logo" />
      <div className="navbar__searchArea">
        <form
          id="navbarSearchForm"
          className="navbar__searchForm"
          action=""
          method="post"
        >
          <input
            className="navbar__searchInput"
            type="text"
            name="navbarSearchInput"
            required="required"
            placeholder="Search"
          />
          <div className="navbar__subcontainer">
            <Btn btnText="+ UPLOAD" />
            <img
              className="navbar__aviPhoto"
              src={aviPhoto}
              alt="Mohan Muruge's"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Navbar;
