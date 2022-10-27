import React, { useState } from "react";
import "./App.css";

function App() {
  //tiles
  const cards = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
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
let click = 0
function Cards(props) {
  const [style, setStyle] = useState("style");

  const handleClick = () => {
    
    console.log({click});
    if (click === 0){
    click = click + 1
    setStyle("style2");  
  } else if (click === 1){
    click = click + 1
      console.log({click});
      setStyle("style2");
    }else {
      console.log('already clicked 2')
    }
  };

  return (
    <>
      <div className={"card"} onClick={handleClick}>
        <div className={style}><img alt="card" src={props.value}></img></div>
      </div>
    </>
  );
}

export default App;
