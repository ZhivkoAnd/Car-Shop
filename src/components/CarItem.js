import React from "react";
import styled from "styled-components";

function CarItem({ car }) {
  return (
    <CarItemWrapper>
        <div>{car.name}</div>
        <div>{car.brand}</div>
        <div>{car.price}</div>
        {/* <img src={car.image} alt="car" /> */}
    </CarItemWrapper>
  );
}

export default CarItem;

const CarItemWrapper = styled.div`
   margin-right: 10px;
    margin-left: 10px;
    margin-top: 25px;
    padding: 15px;
    flex: 1 1 0%;
    /* background-color: rgb(26, 26, 26); */
    flex-direction: column;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  z-index: 1;
  display:flex;
`;