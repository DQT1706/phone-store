import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const NavBar = ({ name, data }) => {
  const [childList, setChilList] = useState([]);
  const [db, setDb] = useState([]);
  useEffect(() => {
    const arr = [];
    axios
      .get(`http://localhost:3001/products`)
      .then((res) => {
        const data = res.data;
        const products = data.filter(
          (product) => product.manufacturer.toLowerCase() === name.toLowerCase()
        );
        const child = products.slice(0, 6);
        setChilList(child);

        setDb(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="col l-2-4 nav-child-wrapper-item">
        <ul className="navbar-child-list">
          <li className="navbar-child-list-item">
            <a href="/" className="navbar-child-link">
              {name}
            </a>
          </li>
          {childList.map((item, i) => (
            <li className="navbar-child-list-item" key={i}>
              <Link to={`/detail/${item.id}`} className="navbar-child-link">
                {item.model}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
