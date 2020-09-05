import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/css_home_page/Container.css";
import "../../assets/fonts/fontawesome/css/all.min.css";
import "../../assets/css/library/library.responsive.css";
import "../../assets/css/css_home_page/responsive.container.css";
const Full_Products_Phone = () => {
  const [full_products, setFull_products] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((res) => {
        const fdata = res.data;
        setFull_products(fdata);
      })
      .catch((err) => alert(err));
  },[]);

  const child = full_products.slice(0,30)

  return (
    <React.Fragment>
      <div className="grid wide wrapper-product--phone">
        <div className="row wrapper-product-item">
          {child.map((item, i) => (
            <div className="col c-6 m-6 l-2-4 product-item-often" key={i}>
              <div className="product-item-offset">
                <div className="product-wrapper-img">
                  <a href="/" className="product-img-li">
                    <img
                      src={item.img}
                      alt="img"
                      className="product-wrapper-img-item"
                    />
                  </a>
                </div>
                <div className="product-item-offset-name">
                  <a href="/" className="offset-name-link">
                    <h3>{item.name_phone}</h3>
                  </a>
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
      </div>
    </React.Fragment>
  );
};

export default Full_Products_Phone;
