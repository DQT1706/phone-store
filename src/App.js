import React from "react";
import "./App.css";
import Home from "./pages/Trangchu/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homephone from "./pages/home_products/HomeProducts";
import Details from './pages/Detail/DetailsProducts'

function App() {
  return (
    // use BEM ,block element modified

    <Router>
      <Switch> 
        <Route exact path="/home-phone" component={Homephone} />
        <Route exact path="/detail/:id" component={Details}/>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
// done header
