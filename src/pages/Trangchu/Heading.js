import React, { useState, useEffect } from "react";
import "../../assets/css/css_home_page/Home__Page.css";
import "../../assets/fonts/fontawesome/css/all.min.css";
import "../../assets/css/library/library.responsive.css";
import "../../assets/css/css_home_page/responsive.header.css";
import { Link } from "react-router-dom";
import Logo from "./child-header/Logo";
import SearchHeading from "./child-header/Search_Heading";
import Navbar from "./child-header/NavBar";
import axios from "axios";
function Heading() {
  const [database, setDatabase] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((res) => {
        const database = res.data;
        setDatabase(database);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);
  const arrItem = [];
  database.map((s) => {
    arrItem.push(s.manufacturer);
  });
  const child = Array.from(new Set(arrItem)).slice(0, 5).sort();

  return (
    <React.Fragment>
      {/* // use BEM // header web */}
      <header className="header">
        {/* 1200px */}
        <div className="grid wide ">
          {/* row all header */}
          <div className="row no-gutter header-wrapper">
            {/* logo */}
            <Logo />
            <SearchHeading />
            {/* header navbar */}
            <div className="col c-7  c-0 m-0  l-7 header-wrapper__navbar ">
              <div className="header-wrapper-navbar-container">
                {/* item */}
                <div className="header-wrapper__navbar-item phone-has">
                  <Link
                    to="/home-phone"
                    className="header-wrapper__navbar-item-link"
                  >
                    <i className="header-wrapper__navbar-icon fas fa-mobile"></i>
                    <span className="navbar-item-name">Điện thoại</span>
                  </Link>

                  {/* child  */}
                  <div className="navbar-wrapper-child-pc">
                    <div className="grid ">
                      <div className="row  navbar-wrapper">
                        {child.map((item, i) => (
                          <Navbar name={item} key={i} />
                        ))}
                        {/* end item */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="header-wrapper__navbar-item">
                  <Link to="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-tablet-alt"></i>
                    <span className="navbar-item-name">Ipad</span>
                  </Link>
                </div>
                <div className="header-wrapper__navbar-item">
                  <Link to="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-headphones"></i>
                    <span className="navbar-item-name">Phụ kiện</span>
                  </Link>
                </div>
                <div className="header-wrapper__navbar-item">
                  <Link to="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-cogs"></i>
                    <span className="navbar-item-name">Sửa chữa</span>
                  </Link>
                </div>
                <div className="header-wrapper__navbar-item">
                  <Link to="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-piggy-bank"></i>
                    <span className="navbar-item-name">Trả góp</span>
                  </Link>
                </div>
                <div className="header-wrapper__navbar-item">
                  <Link to="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-mobile"></i>
                    <span className="navbar-item-name">Nâng đời máy</span>
                  </Link>
                </div>
                <div className="header-wrapper__navbar-item">
                  <Link to="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-cart-plus"></i>
                    <span className="navbar-item-name">Mua Online</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* icon  navbar mobile */}

            <div className="col c-4 m-2 l-0 header-wrapper__navbar-mobile ">
              <input
                type="checkbox"
                hidden
                name="navbar-mobile"
                id="navbar-mobile"
              />
              <label htmlFor="navbar-mobile" className="navbar-mobile-checked">
                <i className="fas fa-bars header-wrapper__navbar-mobile-icon "></i>
              </label>
              <div className="overlay navbar-overlay"></div>
              <div className="header-navbar-tablet-mobile">
                <label
                  htmlFor="navbar-mobile"
                  className="close-navbar-tablet-mobile"
                >
                  <i className="fas fa-times close-navbar-tablet-mobile-icon"></i>
                </label>
                <Link to="/phone-home" className="navbar-list-item">
                  ĐIỆN THOẠI
                </Link>
                <Link to="/" className="navbar-list-item">
                  IPAD
                </Link>
                <Link to="/" className="navbar-list-item">
                  PHỤ KIỆN
                </Link>
                <Link to="/" className="navbar-list-item">
                  SỬA CHỮA
                </Link>
                <Link to="/" className="navbar-list-item">
                  TRẢ GÓP
                </Link>
                <Link to="/" className="navbar-list-item">
                  NÂNG ĐỜI MÁY
                </Link>
                <Link to="/" className="navbar-list-item">
                  MUA ONLINE
                </Link>
              </div>
            </div>
          </div>
          {/* end navbar */}

          {/* navbar hover */}
          {/* end navbar hover */}
        </div>
      </header>
    </React.Fragment>
  );
}

export default Heading;
