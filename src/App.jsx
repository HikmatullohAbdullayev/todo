import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [mode, setMode] = useState(true);

  const toggle = () => {
    setMode(!mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        toggle,
      }}
    >
      <Header />
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
