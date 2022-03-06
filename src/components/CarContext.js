import { createContext, useContext, useState } from "react";

const carContext = createContext();
export const useCarContext = () => useContext(carContext);

const CarContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter((count) => count + 1);
  };

  const values = { counter, increaseCount };

  return (
    <carContext.Provider value={values}>{props.children}</carContext.Provider>
  );
};

export default CarContextProvider;
