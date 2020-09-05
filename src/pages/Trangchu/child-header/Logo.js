import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className=" col c-4 m-3 l-2   header-wrapper__logo">
      <Link
        to="/"
        className="header-wrapper__logo-link"
        title="Home Page Lạc Lạc Store"
      >
        <i className="fab fa-jedi-order header-wrapper__logo-icon"></i>

        {/* <span className="header-wrapper__logo-name">Lạc Lạc</span> */}
      </Link>
    </div>
  );
};

export default Logo;
