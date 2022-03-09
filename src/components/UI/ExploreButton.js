import React from "react";
import styled from "styled-components";

const ExploreButton = () => {
  return <ExploreButtonWrapper>Explore</ExploreButtonWrapper>;
};

export default ExploreButton;

const ExploreButtonWrapper = styled.div`
  padding: 7px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  margin-bottom: 20px;
  background: none;
  border: 1px solid rgb(150, 150, 150);
  position: fixed;
  bottom: 10rem;
`;
