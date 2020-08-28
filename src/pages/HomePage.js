import React from "react";
import "../assets/css/Home__Page.css";
import "../assets/fonts/fontawesome/css/all.min.css";
import "../assets/css/library.responsive.css";
import "../assets/css/responsive.header.css";
function HomePage() {
  return (
    <React.Fragment>
      {/* // use BEM // header web */}
      <header className="header">
        {/* 1200px */}
        <div className="grid wide ">
          {/* row all header */}
          <div className="row no-gutter header-wrapper">
            {/* logo */}
            <div className=" col c-4 m-3 l-2   header-wrapper__logo">
              <a
                href="/"
                className="header-wrapper__logo-link"
                title="Home Page Lạc Lạc Store"
              >
                <i className="fab fa-jedi-order header-wrapper__logo-icon"></i>

                {/* <span className="header-wrapper__logo-name">Lạc Lạc</span> */}
              </a>
            </div>
            {/* header  search */}
            <div className="col c-3 c-0 m-0 l-3   header-wrapper__search ">
              <div className="header-wrapper__from-search">
                <input
                  type="text"
                  className="header-wrapper__search-input"
                  placeholder="Tìm kiếm sản phẩm  "
                />
                <i className="fas fa-search header-wrapper__search-icon"></i>
              </div>
            </div>
            {/* search mobile  and tablet*/}
            <div className="col c-5 m-7 l-0 header-wrapper__search-mobile">
              <div className="header-wrapper__icon-search">
                <div className="header-wrapper__animation">
                  <input
                    type="text"
                    className="header-wrapper__search-input-mobile"
                    placeholder="Tìm kiếm "
                  />
                  <i className="fas fa-search header-wrapper__search-icon-mobile"></i>
                </div>
              </div>
            </div>
            {/* small mobile < 550px */}
            <div className="col c-4 header-wrapper-sm-mobile">
              <input
                type="checkbox"
                className="header-search-checked"
                name="search_mobile"
                hidden
                id="search_mobile"
              />
              <label
                htmlFor="search_mobile"
                className="header-wrapper-input-sm"
              >
                <span className="header-wrapper-sm-border">
                  <i className="fas fa-search header-wrapper__search-icon-sm"></i>
                </span>
              </label>
              {/* small 550px */}
              <div className="header-wrapper-mobile-sm-550">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm.."
                  className="header-wrapper-input-small"
                />
                <div className="header-wrapper-mobile-sm-icon">
                  <i className="fas fa-search mobile-sm-icon-550 "></i>
                </div>
              </div>
            </div>
            {/* end search  */}
            {/* header navbar */}
            <div className="col c-7  c-0 m-0  l-7 header-wrapper__navbar ">
              <div className="header-wrapper-navbar-container">
                {/* item */}
                <div className="header-wrapper__navbar-item phone-has">
                  <a href="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-mobile"></i>
                    <span className="navbar-item-name">Điện thoại</span>
                  </a>

                  {/* child  */}
                  <div className="navbar-wrapper-child-pc">
                    <div className="grid ">
                      <div className="row  navbar-wrapper">
                        {/* item  */}
                        <div className="col l-2-4 nav-child-wrapper-item">
                          <ul className="navbar-child-list">
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                IPHONE
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone 11 ,11 Pro
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone Xs Max
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone Xs
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone X
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone 8, 8 Plus
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone 7 , 7 Plus
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone 6 , 6 Plus
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone 5 , 5s
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Iphone SE , 5c
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col l-2-4 nav-child-wrapper">
                          <ul className="navbar-child-list">
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                SAMSUNG
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung Fold
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung Note 20 Ultra
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung note 20
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung s20 Ultra
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung s20
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung Note 10 PLus
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung Note 10
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung s10 Plus
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Samsung Samsung s10
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col l-2-4 nav-child-wrapper">
                          <ul className="navbar-child-list">
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO Find X
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO RENO 3
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO RENO 4
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO RENO 2F
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO A92
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO A92
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO A91
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                OPPO A9
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col l-2-4 nav-child-wrapper">
                          <ul className="navbar-child-list">
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                XIAOMI
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Xiaomi Mi Note 10 Pro
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Xiaomi Mi Note 10 Lite
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Xiaomi Mi Note 9 Pro
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Xiaomi Mi Note 9
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Xiaomi Mi Note 8 Pro
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Xiaomi Mi Note 8
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col l-2-4 nav-child-wrapper">
                          <ul className="navbar-child-list">
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                HUAWEI
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                Huawei P40 (Nền tảng Huawei Mobile Service)
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                HUAWEI NOVA 5T
                              </a>
                            </li>
                            <li className="navbar-child-list-item">
                              <a href="/" className="navbar-child-link">
                                HUAWEI NOVA 7i
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* end item */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="header-wrapper__navbar-item">
                  <a href="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-tablet-alt"></i>
                    <span className="navbar-item-name">Ipad</span>
                  </a>
                </div>
                <div className="header-wrapper__navbar-item">
                  <a href="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-headphones"></i>
                    <span className="navbar-item-name">Phụ kiện</span>
                  </a>
                </div>
                <div className="header-wrapper__navbar-item">
                  <a href="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-cogs"></i>
                    <span className="navbar-item-name">Sửa chữa</span>
                  </a>
                </div>
                <div className="header-wrapper__navbar-item">
                  <a href="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-piggy-bank"></i>
                    <span className="navbar-item-name">Trả góp</span>
                  </a>
                </div>
                <div className="header-wrapper__navbar-item">
                  <a href="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-mobile"></i>
                    <span className="navbar-item-name">Nâng đời máy</span>
                  </a>
                </div>
                <div className="header-wrapper__navbar-item">
                  <a href="/" className="header-wrapper__navbar-item-link">
                    <i className="header-wrapper__navbar-icon fas fa-cart-plus"></i>
                    <span className="navbar-item-name">Mua Online</span>
                  </a>
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
                <a href="/" className="navbar-list-item">
                  ĐIỆN THOẠI
                </a>
                <a href="/" className="navbar-list-item">
                  IPAD
                </a>
                <a href="/" className="navbar-list-item">
                  PHỤ KIỆN
                </a>
                <a href="/" className="navbar-list-item">
                  SỬA CHỮA
                </a>
                <a href="/" className="navbar-list-item">
                  TRẢ GÓP
                </a>
                <a href="/" className="navbar-list-item">
                  NÂNG ĐỜI MÁY
                </a>
                <a href="/" className="navbar-list-item">
                  MUA ONLINE
                </a>
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

export default HomePage;
