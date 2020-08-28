import React from "react";

import "../assets/css/Container.css";
import "../assets/fonts/fontawesome/css/all.min.css";
import "../assets/css/library.responsive.css";
import "../assets/css/responsive.container.css";
import imgproduct from "../assets/img/products/product1.png";
import imgproduct2 from "../assets/img/products/product2.png";
import imgproduct3 from "../assets/img/products/product3.png";
import imgproduct4 from "../assets/img/products/product4.png";
import imgproduct5 from "../assets/img/products/product5.png";

const Container = () => {
  return (
    <React.Fragment>
      <div className="grid wide wrapper-product">
        <div className="row wrapper-product-header">
          <div className="col l-5 product-header-name">
            <a href="/" className="product-header-name-link">
              <h3>
                ĐIỆN THOẠI{" "}
                <span className="product-header-name-link-hover">SONY</span>
              </h3>
            </a>
          </div>
          <div className="col l-7 product-header-navbar">
            <ul className="product-header-list">
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row wrapper-product-item">
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className='item-offset-info-strong'>6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct2}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct3}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct4}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct5}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid wide wrapper-product">
        <div className="row wrapper-product-header">
          <div className="col l-5 product-header-name">
            <a href="/" className="product-header-name-link">
              <h3>
                ĐIỆN THOẠI{" "}
                <span className="product-header-name-link-hover">SONY</span>
              </h3>
            </a>
          </div>
          <div className="col l-7 product-header-navbar">
            <ul className="product-header-list">
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
              <li className="product-header-list-item">
                <a href="#" className="product-header-list-item-link">
                  Sony Z3 / Z4
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row wrapper-product-item">
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className='item-offset-info-strong'>6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct2}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct3}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct4}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
          <div className="col l-2-4 product-item-often">
            <div className="product-item-offset">
              <div className="product-wrapper-img">
                <a href="/" className="product-img-li">
                  <img
                    src={imgproduct5}
                    alt="img"
                    className="product-wrapper-img-item"
                  />
                </a>
              </div>
              <div className="product-item-offset-name">
                <a href="/" className="offset-name-link">
                  <h3>Sony XZ Premium cũ (Đẹp 99%)</h3>
                </a>
              </div>
              <div className="product-item-offset-price">
                <span className="item-offset-price">3.000.000Đ</span>
                <span className="item-offset-old-price">4.000.000Đ</span>
              </div>

              <div className="product-item-offset-info">
                <span className="item-offset-info">
                  Bảo hành vàng <strong className="item-offset-info-strong">6 tháng 1 đổi 1</strong>cả lỗi nguồn,
                  màn hình, vân tay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Container;
