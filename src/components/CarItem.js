import React from "react";

function CarItem({ car }) {
  return (
    <div className="App">
      <header className="App-header">
        <div>{car.name}</div>
        <div>{car.category}</div>
        <div>{car.price}</div>
        {/* <img src={car.image} alt="car" /> */}
      </header>
    </div>
  );
}

export default CarItem;
