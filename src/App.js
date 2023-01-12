import React, {createContext, useState} from "react";
import Navigation from "./navigation";

export const StateContext = createContext({})



function App() {
  const [fixtures, setFixtures] = useState()
  const [pendingFixtures, setPendingfixtures] = useState()
  return (
    <StateContext.Provider value={{fixtures, setFixtures, pendingFixtures, setPendingfixtures}}>
      <Navigation/>
    </StateContext.Provider>
  );
}

export default App;
