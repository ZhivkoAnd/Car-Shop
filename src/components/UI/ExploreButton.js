import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExploreButton = () => {
  return (
    <div className="container">
      <Link to="/ChooseCar">
        <ExploreButtonWrapper>Explore</ExploreButtonWrapper>
      </Link>
    </div>
  );
};

export default ExploreButton;

const ExploreButtonWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 5rem;
  font-family: "TESLA";
  display: flex;
  justify-content: center;
  padding: 1rem 6rem 1rem 6rem;
  color: white;
  text-transform: uppercase;
  -webkit-letter-spacing: 0.1rem;
  -moz-letter-spacing: 0.1rem;
  -ms-letter-spacing: 0.1rem;
  -webkit-letter-spacing: 0.1rem;
  -moz-letter-spacing: 0.1rem;
  -ms-letter-spacing: 0.1rem;
  letter-spacing: 0.2rem;
  background: none;
  border: 2px solid rgb(255 255 255);
`;
