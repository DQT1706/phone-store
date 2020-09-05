import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ products, category }) => {
  const child_products = products.slice(0, 5);
  const arr = [];

  useEffect(() => {
    products.map((s) => arr.push(s.model));
  }, []);

  const child = Array.from(new Set(arr)).slice(0, 6);

  return (
    <React.Fragment>
      <div className="grid wide wrapper-product">
        {/* navbar phone  */}

        <div className="row wrapper-product-header">
          <div className="col l-4 product-header-name">
            <a href="/" className="product-header-name-link">
              <h3>
                ĐIỆN THOẠI{" "}
                <span className="product-header-name-link-hover">
                  {category}
                </span>
              </h3>
            </a>
          </div>
          {/* navbar list */}

          <div className="col l-8 product-header-navbar">
            <ul className="product-header-list">
              {child.map((s, i) => (
                <li className="product-header-list-item " key={i}>
                  <a href="/" className="product-header-list-item-link">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* products */}
        <div className="row wrapper-product-item">
          {child_products.map((item, i) => (
            <div className="col c-6 m-6 l-2-4 product-item-often" key={i}>
              <div className="product-item-offset">
                <div className="product-wrapper-img">
                  <Link to={`/detail/${item.id}`} className="product-img-li">
                    <img
                      src={item.img}
                      alt="img"
                      className="product-wrapper-img-item"
                    />
                  </Link>
                </div>
                <div className="product-item-offset-name">
                  <Link to={`/detail/${item.id}`} className="offset-name-link">
                    <h3>{item.name_phone}</h3>
                  </Link>
                </div>
                <div className="product-item-offset-price">
                  <span className="item-offset-price">{item.price}</span>
                  <span className="item-offset-old-price">
                    {item.old_price}
                  </span>
                </div>
                <div className="product-item-offset-info">
                  <span className="item-offset-info">
                    {item.content_first}
                    <strong className="item-offset-info-strong">
                      {item.content_main}
                    </strong>
                    {item.content_last}
                  </span>
                </div>

                <div
                  className={
                    item.state === ""
                      ? "hide-element"
                      : "product-item-offset-sticker"
                  }
                >
                  <span className="offset-sticker-content">{item.state}</span>
                </div>
                <div
                  className={
                    item.discount === ""
                      ? "hide-element"
                      : "product-item-offset-tag-discount"
                  }
                >
                  <span className="offset-tag-icon-border">
                    <i className="fas fa-bolt offset-tag-discount-icon"></i>
                  </span>
                  <span className="offset-tag-discount-content">
                    GIẢM {item.discount}
                  </span>
                </div>
                <div
                  className={
                    item.state_2 === ""
                      ? "hide-element"
                      : "product-item-offset-tag-hot"
                  }
                >
                  <span className="offset-tag-hot-sticker">{item.state_2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* see all */}
        <div className="row wrapper-product-see-all">
          <a href="/" className="see-all-link">
            Xem Tất Cả Sản Phẩm
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
