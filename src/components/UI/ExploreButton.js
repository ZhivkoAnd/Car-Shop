import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExploreButton = ({ button }) => {
  return (
    <ExploreButtonWrapper>
      <Link to="/ChooseCar">
        <div className="exploreButton">{button}</div>
      </Link>
    </ExploreButtonWrapper>
  );
};

export default ExploreButton;

const ExploreButtonWrapper = styled.div`
  .exploreButton {
    padding: 1rem 9rem 1rem 9rem;
    letter-spacing: 0.2rem;
    border: 2px solid rgb(90 3 0);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.4);
    color: #fdfdfc;
    text-transform: uppercase;
  }

  .exploreButton:hover {
    background: rgba(0, 0, 0, 0.1);
    color: white;
    transition: 0.2s;
  }
`;
