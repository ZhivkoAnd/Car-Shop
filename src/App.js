import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ChooseCar from "./Pages/ChooseCar";
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";
import "./Styles/styles.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/choosecar" element={<ChooseCar />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
