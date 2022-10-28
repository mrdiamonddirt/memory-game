import React, { useState , useEffect} from "react";
import "./App.css";

function App() {
  const [picked1, setpicked1] = useState(null)
  const [picked2, setpicked2] = useState(null)
  const [cards, usedcards] = useState([
    {
      name: "pikachu",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "pikachu",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "mew",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    },
    {
      name: "mew",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    },
    {
      name: "bulbasaur",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "bulbasaur",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "charmander",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
      name: "charmander",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
      name: "squirtle",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      name: "squirtle",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      name: "Mewtwo",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      name: "Mewtwo",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      name: "Magicarp",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    },
    {
      name: "Magicarp",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    },
    {
      name: "Garydos",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    },
    {
      name: "Garydos",
      flipped: false,
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    },
  ])
 
  const [shuffled, shuffstate] = useState(false)

  function pickedcard(cardpicked) {
    if (picked1 === null) {
      if (shuffled === false) {
        shuffleArray()
        shuffstate(true) 
      } else {
      setpicked1(cardpicked)
      let cardscopy = [...cards]
      cardscopy[cardpicked].flipped = true;
      usedcards(cardscopy)
      }
    } else if (picked2 === null) {
      setpicked2(cardpicked)
      let cardscopy = [...cards]
      cardscopy[cardpicked].flipped = true;
      usedcards(cardscopy)

      setTimeout(() => {
        
     if (cards[picked1].name === cards[cardpicked].name) {
      console.log('matched')
     } else {
      console.log('no match')
      let cardscopy = [...cards]
      cardscopy[picked1].flipped = false;
      cardscopy[cardpicked].flipped = false;
      usedcards(cardscopy)
     }
     
     setpicked1(null)
     setpicked2(null)
    }, 1000);
    }
  }
  

  function shuffleArray() {
    let cardscopy = [...cards]
    let i = cardscopy.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cardscopy[i];
      cardscopy[i] = cardscopy[j];
      cardscopy[j] = temp;
    }
    usedcards(cardscopy)
}
  // shuffleArray()


  return (
    <div className="App">
      <div className="displaydiv">
        {cards.map((card, index) => {
          return <Cards name={card.name} pickedcard={() => pickedcard(index)} flipped={card.flipped} value={card.src} key={index} />;
        })}
      </div>
    </div>
  );
}

function Cards(props) {

  return (
    <>
      <div className={"card"} onClick={props.pickedcard}>
        <div className={props.flipped?"style2":"style"}>
          <img alt="card" src={props.value}></img>
        </div>
      </div>
    </>
  );
}

export default App;
