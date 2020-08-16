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
      <div className="navbar__search-area">
        <form
          id="navbarSearch-form"
          className="navbar__search-form"
          action=""
          method="post"
        >
          <label htmlFor="navbar__search-input" className="navbar__search-icon">
            <img src={SearchIcon} alt="search icon" />
          </label>
          <input
            className="navbar__search-input"
            type="text"
            name="navbar__search-input"
            required="required"
            placeholder="Search"
          />
          <div className="navbar__subcontainer">
            <Link to="/upload" className="navbar__upload-link">
              <Btn btnText="+ UPLOAD" />
            </Link>
            <img
              className="navbar__avi-photo"
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
