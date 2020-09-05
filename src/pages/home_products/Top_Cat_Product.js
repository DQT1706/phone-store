import React from "react";

import "../../assets/css/css_home_phone/Top_Cat.css";
import "../../assets/css/library/library.responsive.css";
import SortPhone from "./SortPhone";
const Top_Cat_Products = () => {
  return (
    <React.Fragment>
      <div className="grid wide top-cat-wrapper">
        <div className="top-cat-redirect">
          <span className="top-cat-redirect--name">Trang chủ</span>
          <i className="fas fa-chevron-right top-cat-redirect-icon"></i>
          <span className="top-cat-redirect--name">Điện thoại</span>
        </div>

        <div className="top-cat-title-block">
          <h1 className="top-cat-title-block-name">
            Vì sao Nên Mua <strong>Điện thoại</strong> ở Di Động Mango
          </h1>
        </div>

        <div className="row top-cat-block">
          <div className="col c-12 m-6 l-3 top-cat-strengths">
            <div className="top-cat-strengths-wrapper">
              <i className="fas fa-medal top-cat-icon"></i>
              <a href="/" className="top-cat-link">
                Cam kết nguyên zin 100% 9 năm uy tín 
              </a>
            </div>
          </div>
          <div className="col c-12 m-6 l-3 top-cat-strengths">
            <div className="top-cat-strengths-wrapper">
              <i className="fas fa-shield-alt top-cat-icon"></i>
              <a href="/" className="top-cat-link">
                Bảo hành 1 đổi 1 Không cần sửa chữa
              </a>
            </div>
          </div>
          <div className="col c-12 m-6 l-3 top-cat-strengths">
            <div className="top-cat-strengths-wrapper">
              <i className="fas fa-piggy-bank top-cat-icon"></i>
              <a href="/" className="top-cat-link">
                Dễ dàng mua sắm Trả góp 0%. Trả trước 0đ
              </a>
            </div>
          </div>
          <div className="col c-12 m-6 l-3 top-cat-strengths">
            <div className="top-cat-strengths-wrapper">
              <i className="fas fa-truck top-cat-icon"></i>
              <a href="/" className="top-cat-link">
                Giao hàng toàn quốc Nhận hàng mới thanh toán
              </a>
            </div>
          </div>
        </div>
        <SortPhone/>
      </div>
    </React.Fragment>
  );
};

export default Top_Cat_Products;
