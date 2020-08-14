import React from "react";
import logo from "../assets/logos/Logo-brainflix.svg";
import Btn from "./Btn";
import aviPhoto from "../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../assets/icons/SVG/Icon-search.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/" className="navbar__logo-link">
        <img className="navbar__logo" src={logo} alt="brainflix logo" />
      </Link>
      <div className="navbar__searchArea">
        <form
          id="navbarSearchForm"
          className="navbar__searchForm"
          action=""
          method="post"
        >
          <label htmlFor="navbar__searchInput" className="navbar__searchIcon">
            <img src={SearchIcon} alt="search icon" />
          </label>
          <input
            className="navbar__searchInput"
            type="text"
            name="navbarSearchInput"
            required="required"
            placeholder="Search"
          />
          <div className="navbar__subcontainer">
            <Link to="/upload" className="navbar__upload-link">
              <Btn btnText="+ UPLOAD" />
            </Link>
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
