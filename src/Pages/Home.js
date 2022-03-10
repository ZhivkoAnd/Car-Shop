import React from "react";
import Title from "../components/UI/Title";
import { motion } from "framer-motion";
import styled from "styled-components";
import Background_PC_208 from "../Media/Background_PC_208.jpg";
import Background_Mobile_208 from "../Media/Background_PC_208.jpg";
import ExploreButton from "../components/UI/ExploreButton";
import Subtitle from "../components/UI/Subtitle";
import Background from "../components/UI/Background";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background />
      <Title />
      <Subtitle />
      <ExploreButton />
    </motion.div>
  );
};

export default Home;
