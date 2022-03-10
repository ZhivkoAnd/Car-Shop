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
import BackButton from "../components/UI/BackButton";
// import { useCarContext } from "./components/CarContext";

const ChooseCar = () => {
  const [carData, setCarData] = useState(carList);
  // const { counter, increaseCount } = useCarContext();

  const filterCarBrand = (brand) => {
    if (brand === "All") {
      setCarData(carList);
      return;
    }
    const filteredCarsBrand = carList.filter((car) => car.brand === brand);
    setCarData(filteredCarsBrand);
  };

  const filterCarType = (type) => {
    if (type === "All") {
      setCarData(carList);
      return;
    }
    const filteredCarsType = carList.filter((car) => car.type === type);
    setCarData(filteredCarsType);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackgroundContainer />
      <NavMenu filterCarBrand={filterCarBrand} filterCarType={filterCarType} />
      <Title />
      <BackButton />
      <CarGrid cars={carData} />
      <Footer />
    </motion.div>
  );
};

export default ChooseCar;

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
  background-image: url(${Background_PC_208});
  flex-direction: column;
  align-items: center;
`;
