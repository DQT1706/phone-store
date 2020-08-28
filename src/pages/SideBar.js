import React, { useState, useEffect } from "react";
import "../assets/css/Sidebar.css";
import "../assets/css/library.responsive.css";
import "../assets/css/responsive.sidebar.css";
import img1 from "../assets/img/htc-u11_1598071881.jpg";
import img2 from "../assets/img/iphone-7-plus-128_1597918393.jpg.webp";

import slide_img1 from "../assets/img/google-copy_1596536340.jpg.webp";
import slide_img2 from "../assets/img/htc-u11_1598071881.jpg";
import slide_img3 from "../assets/img/iphone-7-plus-128_1597918393.jpg.webp";
import slide_img4 from "../assets/img/lg-g8_1595388725.jpg.webp";

const SideBar = () => {
  const List_IMG = [slide_img1, slide_img2, slide_img3, slide_img4];
  const [current, setCurrent] = useState(0);
  const { length } = List_IMG;

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    setTimeout(goToNext, 4000);
  });

  if (!Array.isArray(List_IMG) || length <= 0) {
    return null;
  }
  return (
    <React.Fragment>
      {/* sidebar all */}
      <div className="sidebar-wrapper">
        <div className="grid wide">
          <div className="row  sidebar-wrapper-container">
            {/* left */}
            <div className="col l-8 sidebar-wrapper-left">
              {/* all left */}
              <div className="slideshow-wrapper">
                {/* button back and next */}
                <div className="slideshow-wrapper-prev">
                  <span className="slideshow-btn-prev-back">
                    <i className="fas fa-chevron-left slideshow-btn-prev-icon"></i>
                  </span>
                  <span className="slideshow-btn-prev-next">
                    <i className="fas fa-chevron-right slideshow-btn-prev-icon"></i>
                  </span>
                </div>
                <div className="slideshow-wrapper-dot">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="slideshow-wrapper-img active">
                  {List_IMG.map((s, i) => (
                    <div
                      className={i === current ? "wrapper-img active" : "opc"}
                      key={i}
                    >
                      {i === current && (
                        <img
                          src={s}
                          alt="img"
                          className="slideshow-img-item"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* right */}
            <div className="col l-4 sidebar-wrapper-right">
              <div className="sidebar-wrapper-img-qa">
                <img src={img1} alt="img" className="sidebar-img-qa-item" />
              </div>
              <div className="sidebar-wrapper-img-qa">
                <img src={img2} alt="img" className="sidebar-img-qa-item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
