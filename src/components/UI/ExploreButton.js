import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const ExploreButton = () => {
  return <Link to='/ChooseCar'><ExploreButtonWrapper>Explore</ExploreButtonWrapper></Link>;
};

export default ExploreButton;

const ExploreButtonWrapper = styled.div`
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
    font-size: 1rem;
    margin-bottom: 20px;
    background: none;
    border: 2px solid rgb(255 255 255);
    position: fixed;
    bottom: 6rem;
`;
