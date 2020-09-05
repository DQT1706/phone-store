import React from "react";

const Search_Heading = () => {
  function btnSearch(){
    alert('chức năng đang bảo trì! mong quý khách thông cảm');
  }
  return (
    <React.Fragment>
      {/* header  search */}
      <div className="col c-3 c-0 m-0 l-3   header-wrapper__search ">
        <div className="header-wrapper__from-search">
          <input
            type="text"
            className="header-wrapper__search-input"
            placeholder="Tìm kiếm sản phẩm  "
          />
          <i onClick={btnSearch} className="fas fa-search  header-wrapper__search-icon"></i>
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
            <i onClick={btnSearch} className="fas fa-search  header-wrapper__search-icon-mobile"></i>
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
        <label htmlFor="search_mobile" className="header-wrapper-input-sm">
          <span className="header-wrapper-sm-border">
            <i  className="fas fa-search  header-wrapper__search-icon-sm"></i>
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
            <i onClick={btnSearch} className="fas fa-search  mobile-sm-icon-550 "></i>
          </div>
        </div>
      </div>
      {/* end search  */}
    </React.Fragment>
  );
};

export default Search_Heading;
