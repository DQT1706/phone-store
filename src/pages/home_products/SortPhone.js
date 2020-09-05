import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/library/library.responsive.css";
import "../../assets/css/css_home_phone/SortPhone.css";
const SortPhone = () => {
  const [itemSort, setItemSort] = useState([]);
  useEffect(() => {
    const arrName = [];
    axios.get(`http://localhost:3001/products`).then((res) => {
      const database = res.data;
      database.map((s) => arrName.push(s.manufacturer));
      const a = Array.from(new Set(arrName)).slice(0, 7);
      setItemSort(a);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="row sort-phone">
        <div className="sort-phone-wrapper">
          <div className="col c-3 m-3  l-2 sort-phone-name--st ">
            <h1 className="sort-phone-name">Điện Thoại</h1>
          </div>

          <div className="col c-9 m-9 l-10">
            <ul className="sort-phone-button-list">
              {itemSort.map((s, i) => (
                <li className="sort-phone-button" key={i}>
                  <a href="/" className="sort-phone-button-link">
                   {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SortPhone;
