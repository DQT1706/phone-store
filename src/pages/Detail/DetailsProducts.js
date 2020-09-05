import React, { useEffect, useState } from "react";
import axios from "axios";
const Details = ({ match }) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products?id=${match.params.id}`)
      .then((res) => {
        const itemInfo = res.data;
        const found = itemInfo.find((element) => typeof element === "object");
        setItem(found);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <h1>id : {item.id}</h1>
      <img src={item.img}></img>
    </React.Fragment>
  );
};

export default Details;
