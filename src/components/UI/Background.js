import React from "react";
import styled from "styled-components";
import Background_PC_208 from "../../Media/Background_PC_208.jpg";

const Background = () => {
  return <BackgroundContainer />;
};

const BackgroundContainer = styled.div`
  background-repeat: no-repeat fixed;
  background-color: black;
  background-position: center;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: url(${Background_PC_208});
`;

export default Background;
