import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Container from './pages/Container'
import SideBar from "./pages/SideBar";
import HotProduct from "./pages/HotProduct";

function App() {
  return (
    // use BEM ,block element modified
    <div className="App">
      <React.Fragment>
        <HomePage />
        <SideBar/>
        <HotProduct/>
        <Container/>
        <div style={ {height : '1000px'}}></div>
      </React.Fragment>
    </div>
  );
}

export default App;
// done header
