import React, { useState } from "react";
import "./App.css";

function App() {
  //tiles
  const cards = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2",
    "D1",
    "D2",
    "E1",
    "E2",
    "F1",
    "F2",
    "H1",
    "H2",
    "I1",
    "I2",
  ];

  return (
    <div className="App">
      <div className="displaydiv">
        {cards.map((card ,index) => {
          return <Cards value={card} key={index}/>;
        })}
      </div>
    </div>
  );
}

function Cards(props) {
  const [style, setStyle] = useState("style");

  const handleClick = () => {
    console.log({ props });
    setStyle("style2");
  };

  return (
    <>
      <div className={"card"} onClick={handleClick}>
        <div className={style}>A</div>
      </div>
    </>
  );
}

export default App;
