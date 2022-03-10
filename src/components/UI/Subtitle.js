import React from "react";
import styled from "styled-components";

const Subtitle = ({ subtitle }) => {
  return <SubtitleWrapper>{subtitle}</SubtitleWrapper>;
};

export default Subtitle;

const SubtitleWrapper = styled.div`
  position: fixed;
  margin-top: 12rem;
`;
