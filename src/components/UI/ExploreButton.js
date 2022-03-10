import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExploreButton = ({ button }) => {
  return <ExploreButtonWrapper>{button}</ExploreButtonWrapper>;
};

export default ExploreButton;

const ExploreButtonWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  padding: 1rem 8rem 1rem 8rem;
  letter-spacing: 0.2rem;
  border: 1px solid rgb(255 255 255);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.55);
  color: #fdfdfc;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
