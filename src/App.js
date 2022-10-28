import React, { useState } from "react";
import "./App.css";

function App() {
  const [picked1, setpicked1] = useState(null)
  const [picked2, setpicked2] = useState(null)

  //tiles
  const cards = [
    {
      name: "pikachu",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "pikachu",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "mew",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    },
    {
      name: "mew",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    },
    {
      name: "bulbasaur",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "bulbasaur",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "charmander",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
      name: "charmander",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
      name: "squirtle",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      name: "squirtle",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      name: "Mewtwo",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      name: "Mewtwo",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      name: "Magicarp",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    },
    {
      name: "Magicarp",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    },
    {
      name: "Garydos",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    },
    {
      name: "Garydos",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    },
  ];
 
  function pickedcard(cardpicked) {
    if (picked1 === null) {
      setpicked1(cardpicked)
    } else if (picked2 === null) {
      setpicked2(cardpicked)
     if (picked1 === cardpicked) {
      console.log('mathched')
     } else {
      console.log('no match')
     }
    }
  }

  return (
    <div className="App">
      <div className="displaydiv">
        {cards.map((card, index) => {
          return <Cards name={card.name} pickedcard={pickedcard} value={card.src} key={index} />;
        })}
      </div>
    </div>
  );
}


let click = 0;
function Cards(props) {
  const [style, setStyle] = useState("style");
  
  const handleClick = () => {
    
    // console.log({ click });
    if (click === 0) {
      click = click + 1;
      setStyle("style2");
    } else if (click === 1) {
      click = click + 1;
      console.log({ click });
      setStyle("style2");
      // if (picked1 === picked2) {
      //   console.log("match");
      // } else {
      //   console.log('no match')
      // }

    } else {
      console.log("already clicked 2");
    }
  };

  return (
    <>
      <div className={"card"} onClick={() => props.pickedcard(props.name)}>
        <div className={style}>
          <img alt="card" src={props.value}></img>
        </div>
      </div>
    </>
  );
}

export default App;
