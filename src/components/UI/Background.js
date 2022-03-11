import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../Media/Background.jpg";

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
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    url(${BackgroundImage});
  flex-direction: column;
`;

export default Background;
