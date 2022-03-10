import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/UI/Loading";
import "./Styles/styles.css";

const Home = React.lazy(() => import("./Pages/Home"));
const ChooseCar = React.lazy(() => import("./Pages/ChooseCar"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Contacts = React.lazy(() => import("./Pages/Contacts"));

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/choosecar" element={<ChooseCar />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;
