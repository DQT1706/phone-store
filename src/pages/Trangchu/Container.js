import React, { useState, useEffect } from "react";

import axios from "axios";

import "../../assets/css/css_home_page/Container.css";
import "../../assets/fonts/fontawesome/css/all.min.css";
import "../../assets/css/library/library.responsive.css";
import "../../assets/css/css_home_page/responsive.container.css";
// import NavbarProducts from "./child-container/NavbarProducts";
import Products from "./child-container/Products";

const Container = () => {
  const [sony, setSony] = useState([]);
  const [lg, setLG] = useState([]);
  const [google, setGoogle] = useState([]);
  const [samsung, setSamsung] = useState([]);
  const [iphone, setIphone] = useState([]);
  const [ipad, setIpad] = useState([]);
  const [db,setDb] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((res) => {
        const database = res.data;
        const Sony = database.filter(
          (item) => item.manufacturer.toLowerCase() === "sony"
        );
        const LG = database.filter(
          (item) => item.manufacturer.toLowerCase() === "lg"
        );
        const Google = database.filter(
          (item) => item.manufacturer.toLowerCase() === "google pixel"
        );
        const Samsung = database.filter(
          (item) => item.manufacturer.toLowerCase() === "samsung"
        );
        const iphone = database.filter(
          (item) => item.manufacturer.toLowerCase() === "iphone"
        );
        const ipad = database.filter(
          (item) => item.manufacturer.toLowerCase() === "ipad"
        );
        setDb(database);
        setSony(Sony);
        setLG(LG);
        setGoogle(Google);
        setSamsung(Samsung);
        setIphone(iphone);
        setIpad(ipad);
      })
      .catch((error) => console.log(error));
  }, []);

  

  return (
    <React.Fragment>
      <Products category="SONY"  products={sony} />
      <Products category="LG" products={lg} />
      <Products category="GOOGLE" products={google} />
      <Products category="SAMSUNG" products={samsung} />
      <Products category="IPHONE" products={iphone} />
      <Products category="IPAD" products={ipad} />
    </React.Fragment>
  );
};

export default Container;
