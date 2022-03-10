import React from "react";
import styled from "styled-components";

const Title = () => {
  return <TitleWrapper>Title</TitleWrapper>;
};

export default Title;

const TitleWrapper = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  margin-top: 8rem;
  font-family: "TESLA";
  display: flex;
  justify-content: center;
`;
