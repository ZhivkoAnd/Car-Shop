import "./App.css";
import carList from "./components/CarList";
import React, { useState } from "react";
import CarGrid from "./components/CarGrid";

function App() {
  const [carData, setCarData] = useState(carList);

  const filterCarCategories = (category) => {
    if (category === "all") {
      setCarData(carList);
      return;
    }
    const filteredCars = carList.filter((item) => item.category === category);
    setCarData(filteredCars);
  };

  return (
    <div className="App">
      <CarGrid cars={carData} filterCarCategories={filterCarCategories} />
    </div>
  );
}

export default App;
