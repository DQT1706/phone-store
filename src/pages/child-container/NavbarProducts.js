import React from "react";

const NavbarProducts = ({ navbar_list }) => {
  return (
    <ul className="product-header-list">
      {navbar_list.map((item, i) => (
        <li className="product-header-list-item" key={i}>
          <a href="/" className="product-header-list-item-link">
              {item.type}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarProducts;
