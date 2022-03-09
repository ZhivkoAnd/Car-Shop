import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CarContextProvider from "./components/CarContext";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render(
  <CarContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarContextProvider>,
  document.getElementById("root")
);
