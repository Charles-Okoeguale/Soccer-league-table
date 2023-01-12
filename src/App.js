import React, {createContext, useState} from "react";
import Navigation from "./navigation";

export const StateContext = createContext({})



function App() {
  const [fixtures, setFixtures] = useState()
  const [tobeplayed, setTobeplayed] = useState()
  return (
    <StateContext.Provider value={{fixtures, setFixtures, tobeplayed, setTobeplayed}}>
      <Navigation/>
    </StateContext.Provider>
  );
}

export default App;
