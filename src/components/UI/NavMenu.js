import React from "react";
import styled from "styled-components";
import Categories from "../FilterBrands";

const NavMenu = ({ filterCarBrands }) => {
  return (
    <NavWrapper>
      <Categories filterCarBrands={filterCarBrands} />
    </NavWrapper>
  );
};

export default NavMenu;

const NavWrapper = styled.div``;
