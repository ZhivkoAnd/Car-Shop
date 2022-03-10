import React, {Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Loading from './components/UI/Loading'
import "./Styles/styles.css";

const ChooseCar = React.lazy(()=> import('./Pages/ChooseCar'))
const AboutUs = React.lazy(()=> import('./Pages/AboutUs'))
const Contacts = React.lazy(()=> import('./Pages/Contacts'))

const App = () => {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/choosecar" element={<ChooseCar />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
