import React from "react";
import styled from "styled-components";
import Background_PC_208 from "../../Media/Background_PC_208.jpg";

const Background = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

const BackgroundContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  z-index: 3;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background-image: url(${Background_PC_208});
`;

export default Background;
