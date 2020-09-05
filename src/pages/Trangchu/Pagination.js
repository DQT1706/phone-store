import React from "react";
import "../../assets/css/css_home_page/Pagination.css";
import "../../assets/css/css_home_page/responsive.pagination.css";
import "../../assets/css/library/library.responsive.css";

const Pagination = () => {
  return (
    <React.Fragment>
      <div className="grid wide Pagination">
        <div className="row Pagination-wrapper">
          <ul className=" Pagination-list-button">
            <li className="Pagination-list-button-item active">
              <i className="fas fa-chevron-left Pagination-button   Pagination-button-item-icon--left"></i>
            </li>
            <li className="Pagination-list-button-item">
              <div className="Pagination-button">1</div>
            </li>
            <li className="Pagination-list-button-item">
              <div className="Pagination-button">2</div>
            </li>
            <li className="Pagination-list-button-item">
              <div className="Pagination-button">3</div>
            </li>
            <li className="Pagination-list-button-item">
              <div className="Pagination-button">...</div>
            </li>
            <li className="Pagination-list-button-item">
              <div className="Pagination-button">10</div>
            </li>
            <li className="Pagination-list-button-item">
              <i className="fas fa-chevron-right Pagination-button Pagination-button-item-icon--right"></i>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
