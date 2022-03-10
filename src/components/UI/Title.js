import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TitleWrapper>Luxury </TitleWrapper>
    </motion.div>
  );
};

export default Title;

const TitleWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin-top: 5rem;
  font-family: "TESLA";
  display: flex;
  justify-content: center;
  font-size: 6rem;
  font-family: "Italianno", cursive;
  letter-spacing: 4px;
`;
