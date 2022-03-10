import React from "react";
import Title from "../components/UI/Title";
import { motion } from "framer-motion";
import ExploreButton from "../components/UI/ExploreButton";
import Background from "../components/UI/Background";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background>
        <Title title="Luxury" subtitle="Welcome" />
        <ExploreButton button="Explore" />
      </Background>
    </motion.div>
  );
};

export default Home;
