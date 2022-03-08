import "./App.css";
import carList from "./components/CarList";
import React, { useState } from "react";
import CarGrid from "./components/CarGrid";
import NavMenu from "./components/UI/NavMenu";
// import { useCarContext } from "./components/CarContext";

function App() {
  const [carData, setCarData] = useState(carList);
  // const { counter, increaseCount } = useCarContext();

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
      <NavMenu filterCarCategories={filterCarCategories}/>
      <CarGrid cars={carData} />
    </div>
  );
}

export default App;
