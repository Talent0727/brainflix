import React from "react";
import headerVideo from "../assets/videos/BrainStation Sample Video.mp4";

const Header = () => {
  return (
    <header className="header">
      <video className="header__video" controls>
        <source
          className="header__videoSource"
          src={headerVideo}
          type="video/mp4"
        />
      </video>
    </header>
  );
};

export default Header;
