import React from "react";
import CarItem from "./CarItem";
import styled from "styled-components";

function CarGrid({ cars }) {
  return (
  
        <CarGridWrapper>
          {cars.map((carObj) => (
            <CarItem key={carObj.id} car={carObj} />
          ))}
        </CarGridWrapper>
     
  );
}

export default CarGrid;

const CarGridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1205px;
    margin: auto;
    font-family: "Roboto",sans-serif;
  z-index: 1;
  display:flex;
`;

