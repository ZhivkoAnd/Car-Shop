import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Title = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TitleWrapper>{title}</TitleWrapper>
      <SubtitleWrapper>{subtitle}</SubtitleWrapper>
    </motion.div>
  );
};

export default Title;

const TitleWrapper = styled.div`
  font-size: 6rem;
  font-family: "Italianno", cursive;
  letter-spacing: 4px;
`;

const SubtitleWrapper = styled.div`
  font-size: 2rem;
  letter-spacing: 4px;
`;
