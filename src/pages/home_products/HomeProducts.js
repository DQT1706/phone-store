import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Headding from "../Trangchu/Heading";
import FooterPage from "../Trangchu/Footer";
import FullProductsPhone from "./Full_Products_Phone";
import Pagination from "../Trangchu/Pagination";
import TopCatProducts from "./Top_Cat_Product";

const Home_phone = () => {
  let { path, url } = useRouteMatch();
  return (
    <React.Fragment>
      <Headding />
      <TopCatProducts />
      <FullProductsPhone />
      <Pagination />
      <FooterPage />
    </React.Fragment>
  );
};

export default Home_phone;
