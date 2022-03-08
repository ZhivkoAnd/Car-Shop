import React from "react";
import CarItem from "./CarItem";

function CarGrid({ cars }) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {cars.map((carObj) => (
            <CarItem key={carObj.id} car={carObj} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default CarGrid;
