import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Counter from "./components/Counter";
import PropDrilling from "./components/PropDrilling";
import Show from "./components/Show";
import Context from "./components/Context";
import Component from "./components/Component"; // Importime uue komponendi

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(prevShow => !prevShow);

  const hobbies = ["Coding", "Reading", "Gaming"]; // Huvid

  return (
    <>
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter />
      <Name title="Raimo" />
      <Name />
      <Component name="Raimo" hobbies={hobbies} />
    </>
  )
}

export default App;
