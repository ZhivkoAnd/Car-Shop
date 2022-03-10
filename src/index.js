import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CarContextProvider from "./components/CarContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <CarContextProvider>
        <App />
      </CarContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
