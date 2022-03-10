import React, { useState } from "react";
import carList from "../components/CarList";
import CarGrid from "../components/CarGrid";
import NavMenu from "../components/UI/NavMenu";
import Footer from "../components/UI/Footer";
import { motion } from "framer-motion";
import styled from "styled-components";
import Background_PC_208 from "../Media/Background_PC_208.jpg";
import Background_Mobile_208 from "../Media/Background_PC_208.jpg";
import BackButton from "../components/UI/BackButton";
import Background from "../components/UI/Background";
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
      <Background>
        <NavMenu
          filterCarBrand={filterCarBrand}
          filterCarType={filterCarType}
        />
        <BackButton />
        <CarGrid cars={carData} />
        <Footer />
      </Background>
    </motion.div>
  );
};

export default ChooseCar;
