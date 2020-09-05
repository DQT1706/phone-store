import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import SlideShow from "./SlideShow";
import HotProducts from "./HotProduct";
import Container from "./Container";
import Footer from "./Footer";
import axios from "axios";

const Home = () => {
  const [database, setDatabase] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((res) => {
        const database = res.data;
        setDatabase(database);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      {database === [] ? (
        <p>Loading Hooks Data ...</p>
      ) : (
        <React.Fragment>
          <Heading />
          <SlideShow />
          <HotProducts />
          <Container />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
