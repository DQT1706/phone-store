import React from "react";

const Products = ({ products }) => {
  return (
    <div className="row wrapper-product-item">
      {/* item */}
      {products.map((product, i) => (
        <div className="col c-6 m-6 l-2-4 product-item-often">
          <div className="product-item-offset">
            <div className="product-wrapper-img">
              <a href="/" className="product-img-li">
                <img
                  src={product.img}
                  alt="img"
                  className="product-wrapper-img-item"
                />
              </a>
            </div>
            <div className="product-item-offset-name">
              <a href="/" className="offset-name-link">
                <h3>{product.name_phone}</h3>
              </a>
            </div>
            <div className="product-item-offset-price">
              <span className="item-offset-price">{product.price}</span>
              <span className="item-offset-old-price">{product.old_price}</span>
            </div>
            <div className="product-item-offset-info">
              <span className="item-offset-info">
                Bảo hành vàng{" "}
                <strong className="item-offset-info-strong">
                  6 tháng 1 đổi 1
                </strong>
                cả lỗi nguồn, màn hình, vân tay
              </span>
            </div>

            <div className="product-item-offset-sticker">
              <span className="offset-sticker-content">NEW</span>
            </div>
            <div className="product-item-offset-tag-discount">
              <span className="offset-tag-icon-border">
                <i className="fas fa-bolt offset-tag-discount-icon"></i>
              </span>
              <span className="offset-tag-discount-content">GIẢM 200.000đ</span>
            </div>
            <div className="product-item-offset-tag-hot">
              <span className="offset-tag-hot-sticker">HOT</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
