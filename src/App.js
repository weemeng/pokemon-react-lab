import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";
import PokemonCard from "./components/PokemonCard"

const bulbasaur = pokemonData[0];

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={bulbasaur} />
    </div>
  );
}

export default App;
