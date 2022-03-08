import React, { useState } from "react";
import carList from "../components/CarList";
import CarGrid from "../components/CarGrid";
import NavMenu from "../components/UI/NavMenu";
import Footer from "../components/UI/Footer";
import Title from "../components/UI/Title";
import { motion } from "framer-motion";
import styled from "styled-components";
import Background_PC_208 from "../Media/Background_PC_208.jpg";
import Background_Mobile_208 from "../Media/Background_PC_208.jpg";
// import { useCarContext } from "./components/CarContext";

const Home = () => {
  const [carData, setCarData] = useState(carList);
  // const { counter, increaseCount } = useCarContext();

  const filterCarCategories = (category) => {
    if (category === "all") {
      setCarData(carList);
      return;
    }
    const filteredCars = carList.filter((item) => item.category === category);
    setCarData(filteredCars);
  };

  return (
    <BackgroundContainer>
      <NavMenu filterCarCategories={filterCarCategories} />
      <Title />
      <CarGrid cars={carData} />
      <Footer />
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
