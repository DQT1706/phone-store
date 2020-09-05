import React from "react";
import "../../assets/css/css_home_page/HotProduct.css";
import "../../assets/css/library/library.responsive.css";
import "../../assets/css/css_home_page/responsive.hotproduct.css";

import hot1 from "../../assets/img/hot1.webp";
import hot2 from "../../assets/img/hot2.webp";
import hot3 from "../../assets/img/hot3.webp";

const HotProduct = () => {
  const LIST_HOT = [hot1, hot2, hot3];
  return (
    <React.Fragment>
      <div className="grid wide hot-product-wrapper ">
        <div className="row  ">
          {" "}
            <div className="col l-12 hot-product-name ">
            <h3 className="hot-product-content">SẢN PHẨM NỔI BẬT</h3>
            </div>
        </div>
        <div className="row  hot-wrapper">

            {
                LIST_HOT.map((s,i) =>(
                    <div className="col l-4 hot-wrapper-item" key={i}>
                    <div className="hot-wrapper-img">
                      <img src={s} alt="img" className="hot-product-img" />
                    </div>
                  </div>
                ))
            }
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default HotProduct;
