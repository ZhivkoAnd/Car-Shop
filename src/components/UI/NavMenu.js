import React from "react";
import styled from "styled-components";
import FilterCars from "../FilterCars";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavMenu = ({ filterCarBrand, filterCarType }) => {
  return (
    <NavWrapper>
      <FilterCars
        filterCarBrand={filterCarBrand}
        filterCarType={filterCarType}
      />
    </NavWrapper>
  );
};

export default NavMenu;

const NavWrapper = styled.div``;
