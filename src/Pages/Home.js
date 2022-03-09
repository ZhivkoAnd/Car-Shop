import React from "react";
import Title from "../components/UI/Title";
import { motion } from "framer-motion";
import styled from "styled-components";
import Background_PC_208 from "../Media/Background_PC_208.jpg";
import Background_Mobile_208 from "../Media/Background_PC_208.jpg";
import ExploreButton from '../components/UI/ExploreButton'
import Subtitle from "../components/UI/Subtitle";

const Home = () => {

  return (
    <BackgroundContainer>
      <Title />
      <Subtitle/>
      <ExploreButton/>
    </BackgroundContainer>
  );
};

export default Home;

const BackgroundContainer = styled.div`
  margin: 0px;
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
