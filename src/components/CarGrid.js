import React from "react";
import CarItem from "./CarItem";

function CarGrid({ cars, filterCarCategories }) {
  return (
    <div className="App">
      <header className="App-header">
        {cars.map((category) => {
          return (
            <button onClick={() => filterCarCategories(category.category)}>
              {category.category}
            </button>
          );
        })}
        <div>
          {cars.map((carParam) => (
            <CarItem key={carParam.id} car={carParam} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default CarGrid;
