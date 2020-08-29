import React from "react";
import "../assets/css/Container.css";
import "../assets/fonts/fontawesome/css/all.min.css";
import "../assets/css/library.responsive.css";
import "../assets/css/responsive.container.css";
import Database from "../db.json";
import NavbarProducts from "./child-container/NavbarProducts";
import Products from "./child-container/Products";

const Container = () => {
  return (
    <React.Fragment>
      {Database.map((s, i) => (
        <div className="grid wide wrapper-product" key={i}>
          {/* navbar phone  */}

          <div className="row wrapper-product-header">
            <div className="col l-4 product-header-name">
              <a href="/" className="product-header-name-link">
                <h3>
                  ĐIỆN THOẠI{" "}
                  <span className="product-header-name-link-hover">
                    {s.title}
                  </span>
                </h3>
              </a>
            </div>
            {/* navbar list */}

            <div className="col l-8 product-header-navbar">
              <NavbarProducts navbar_list={s.phone_type} />
            </div>
          </div>

          {/* products */}

          <Products products={s.product_phone} />
          {/* see all */}
          <div className="row wrapper-product-see-all">
            <a href="/" className="see-all-link">
              Xem Tất Cả Sản Phẩm
            </a>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Container;
