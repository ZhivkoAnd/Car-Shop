import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExploreButton = ({ button }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <ExploreButtonWrapper>
        <Link to="/ChooseCar">
          <div className="exploreButton">{button}</div>
        </Link>
      </ExploreButtonWrapper>
    </motion.div>
  );
};

export default ExploreButton;

const ExploreButtonWrapper = styled.div`
  .exploreButton {
    padding: 1rem 9rem 1rem 9rem;
    letter-spacing: 0.2rem;
    border: 1px solid rgb(255 255 255);
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
