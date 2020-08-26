import React from "react";
import "../assets/css/Home__Page.css";
import "../assets/fonts/fontawesome/css/all.min.css";
import "../assets/css/library.responsive.css";
import "../assets/css/responsive.media.css";
function HomePage() {
  return (
    // use BEM
    // header web
    <header className="header">
      {/* 1200px */}
      <div className="grid wide ">
            <div className="header-wrapper--container">
                {/* row all header */}
        <div className="row header-wrapper">
          {/* logo */}
          <div className="col-8 m-8 l-2   header-wrapper__logo">
            <a
              href="#"
              className="header-wrapper__logo-link" 
              title="Home Page Lạc Lạc Store"
            >
              <i className="fas fa-cloud header-wrapper__logo-icon"></i>
              {/* <span className="header-wrapper__logo-name">Lạc Lạc</span> */}
            </a>
          </div>

          {/* header  search */}
          <div className="col-3 c-0 m-0 l-3   header-wrapper__search ">
            <div className="header-wrapper__from-search">
                <input
                type="text"
                className="header-wrapper__search-input"
                placeholder="Tìm kiếm sản phẩm "
                />
                <i className="fas fa-search header-wrapper__search-icon"></i>
            </div>
          </div>
          {/* search mobile */}
          <div className="col-2 m-2 l-0 header-wrapper__search-mobile">
            <div className="header-wrapper__icon-search">
              <span className="header-wrapper__search-border">
                <i className="fas fa-search header-wrapper__search-icon-mobile"></i>
              </span>
            </div>
          </div>

          {/* end search  */}

          {/* header navbar */}

          <div className="col-7  c-0 m-0  l-7 header-wrapper__navbar ">
                <div className="header-wrapper-container">
                    {/* item */}
            <div className="header-wrapper__navbar-item">
              <a href="#" className="header-wrapper-__navbar-item-link">
                <i className="header-wrapper__navbar-icon fas fa-mobile"></i>
                <span className="navbar-item-name">Điện thoại</span>
              </a>
            </div>
            <div className="header-wrapper__navbar-item">
              <a href="#" className="header-wrapper-__navbar-item-link">
                <i className="header-wrapper__navbar-icon fas fa-tablet-alt"></i>
                <span className="navbar-item-name">Ipad</span>
              </a>
            </div>
            <div className="header-wrapper__navbar-item">
              <a href="#" className="header-wrapper-__navbar-item-link">
                <i className="header-wrapper__navbar-icon fas fa-headphones"></i>
                <span className="navbar-item-name">Phụ kiện</span>
              </a>
            </div>
            <div className="header-wrapper__navbar-item">
              <a href="#" className="header-wrapper-__navbar-item-link">
                <i className="header-wrapper__navbar-icon fas fa-cogs"></i>
                <span className="navbar-item-name">Sửa chữa</span>
              </a>
            </div>
            <div className="header-wrapper__navbar-item">
              <a href="#" className="header-wrapper-__navbar-item-link">
                <i className="header-wrapper__navbar-icon fas fa-piggy-bank"></i>
                <span className="navbar-item-name">Trả góp</span>
              </a>
            </div>
            <div className="header-wrapper__navbar-item">
              <a href="#" className="header-wrapper-__navbar-item-link">
                <i className="header-wrapper__navbar-icon fas fa-mobile"></i>
                <span className="navbar-item-name">Nâng đời máy</span>
              </a>
            </div>
            <div className="header-wrapper__navbar-item">
              <a href="#" className="header-wrapper-__navbar-item-link">
                <i className="header-wrapper__navbar-icon fas fa-cart-plus"></i>
                <span className="navbar-item-name">Mua Online</span>
              </a>
            </div>
                </div>
          </div>
          {/* navbar mobile */}
          <div className="c-2 m-2 l-0 header-wrapper__navbar-mobile ">
            <i className="fas fa-bars header-wrapper__navbar-mobile-icon "></i>
          </div>
        </div>

        {/* end navbar */}
            </div>
      </div>
    </header>
  );
}

export default HomePage;
