import React from "react";
import styled from "styled-components";
import Background_PC_208 from "../../Media/Background_PC_208.jpg";

const Background = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

const BackgroundContainer = styled.div`
  background-color: black;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease 0s;
  background-size: cover;
  z-index: 3;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background-image: url(${Background_PC_208});
`;

export default Background;
