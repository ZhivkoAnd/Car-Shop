import React from "react";
import Title from "../components/UI/Title";
import { motion } from "framer-motion";
import styled from "styled-components";
import Background_PC_208 from "../Media/Background_PC_208.jpg";
import Background_Mobile_208 from "../Media/Background_PC_208.jpg";
import ExploreButton from "../components/UI/ExploreButton";
import Subtitle from "../components/UI/Subtitle";
import BackgroundVideo from "../components/UI/BackgroundVideo";

const Home = () => {
  return (
    <>
      <BackgroundVideo />
      <Title />
      <Subtitle />
      <ExploreButton />
    </>
  );
};

export default Home;