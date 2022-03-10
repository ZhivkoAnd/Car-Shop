import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExploreButton = ({ button }) => {
  return (
    <ExploreButtonWrapper>
      <Link to="/ChooseCar">
        <div className="wrap">{button}</div>
      </Link>
    </ExploreButtonWrapper>
  );
};

export default ExploreButton;

const ExploreButtonWrapper = styled.div`
  .wrap {
    padding: 1rem 5rem 1rem 5rem;
    letter-spacing: 0.2rem;
    border: 1px solid rgb(255 255 255);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.55);
    color: #fdfdfc;
    text-transform: uppercase;
  }
`;
