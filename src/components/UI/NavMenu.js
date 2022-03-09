import React from "react";
import styled from "styled-components";
import FilterCars from "../FilterCars";

const NavMenu = ({ filterCarBrand, filterCarType }) => {
  return (
    <NavWrapper>
      <FilterCars filterCarBrand={filterCarBrand} filterCarType = {filterCarType}/>
    </NavWrapper>
  );
};

export default NavMenu;

const NavWrapper = styled.div``;
