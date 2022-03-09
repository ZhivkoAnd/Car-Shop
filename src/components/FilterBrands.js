import React from "react";
import carList from "./CarList";

const FilterBrands = ({ filterCarBrands }) => {
  
  // Creating an array of unique values
  const uniqueBrands= [
    "All",
    ...new Set(
      carList.map((car)=>{
        return car.brand
      })
    ),
  ];

 // Mapping through that array to display the buttons for the categories  
 const uniqueBrandButtons = uniqueBrands.map((brand)=><button key={brand} onClick={()=>filterCarBrands(brand)}>{brand}</button>)

  return <div>{uniqueBrandButtons}</div>;
};

export default FilterBrands;
