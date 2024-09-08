import { createContext, useState } from "react";

export const ContextStore = createContext();

const ContextProvider = ({ children }) => {
  const [catagory, setCatagory] = useState("home");
  console.log(catagory)

  const handleCatagory = (e) => {
    // console.log(e)
    setCatagory(e);
  };

  return (
    <ContextStore.Provider value={{ catagory, handleCatagory }}>
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;