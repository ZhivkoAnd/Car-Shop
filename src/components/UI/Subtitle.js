import React from "react";
import styled from "styled-components";

const Subtitle = () => {
  return <SubtitleWrapper>Subtitle</SubtitleWrapper>;
};

export default Subtitle;

const SubtitleWrapper = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  margin-top: 12rem;
  font-family: "TESLA";
  display: flex;
  justify-content: center;
`;
