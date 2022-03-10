import React from "react";
import styled from "styled-components";
import Background_PC_208 from "../../Media/Background_PC_208.jpg";

const Background = ({ children }) => {
  return (
    <BackgroundContainer>
      <div className="container justified">{children}</div>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background-position: center center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-image: url(${Background_PC_208});
  flex-direction: column;
`;

export default Background;
