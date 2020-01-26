import React from "react";
import axios from "axios";
// import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";
import "./PokemonGallery.css";
import ReactLoading from 'react-loading'


class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      inputVal: "",
      isLoading: true,
      errorMessage: "",
      pokemonData: []
    };
  }

  updateInput = event => {
    this.setState({
      inputVal: event.target.value
    });
  };

  componentDidMount() {
    this.setState({
      errorMessage: "",
      isLoading: false
    });
    axios(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then(response => {
        this.setState({
          status: response.status,
          pokemonData: response.data
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          errorMessage: error.status
        });
      });
  }

  generatePokemon(pokemonData, filterInput) {
    const pokefilter = pokemonData
      .filter(filterVal =>
        filterVal.name.english.toLowerCase().includes(filterInput)
      )
      .map(pokemon => {
        return <PokemonCard pokemon={pokemon} />;
      });
    return pokefilter;
  }

  render() {
    return (
      <div>
        <div className="input-Search-Bar">
          <input
            aria-label="pokemonFilter"
            type="text"
            placeholder="Search Pokedex"
            value={this.state.inputVal}
            onChange={this.updateInput}
          />
        </div>
        <div>
            <button onClick={() => {
                this.setState({
                    inputVal:""
                })
            }}> Reset </button>
        </div>
        <div className="pokemon-gallery">
          {this.state.isLoading &&
            <ReactLoading type="bubbles" color="blue"/>
          }
          {!!this.state.errorMessage && <div>{this.state.errorMessage}</div>}
          {this.generatePokemon(this.state.pokemonData, this.state.inputVal)}
        </div>
      </div>
    );
  }
}

export default PokemonGallery;
