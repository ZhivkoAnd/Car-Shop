import React from "react";
import carList from "./CarList";

const FilterCars = ({ filterCarBrand, filterCarType }) => {
  
  // Creating an array of unique values
  const uniqueBrands= [
    "All",
    ...new Set(
      carList.map((car)=>{
        return car.brand
      })
    ),
  ];

  const uniqueTypes= [
    "All",
    ...new Set(
      carList.map((car)=>{
        return car.type
      })
    ),
  ];

 // Mapping through that array to display the buttons for the categories  
 const uniqueBrandButtons = uniqueBrands.map((brand)=><button key={brand} onClick={()=>filterCarBrand(brand)}>{brand}</button>)
 const uniqueTypeButtons = uniqueTypes.map((type)=><button key={type} onClick={()=>filterCarType(type)}>{type}</button>)

  return <div><div>{uniqueBrandButtons}</div><div>{uniqueTypeButtons}</div></div>;
};

export default FilterCars;
