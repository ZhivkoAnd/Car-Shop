import React from "react";
import carList from "./CarList";

const Categories = ({ filterCarCategories }) => {
  const uniqueCategories = [
    "all",
    ...new Set(
      carList.map((car) => (
        <button
          key={car.category}
          onClick={() => filterCarCategories(car.category)}
        >
          {car.category}
        </button>
      ))
    ),
  ];

  return <div>{uniqueCategories}</div>;
};

export default Categories;
