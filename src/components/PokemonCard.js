import React from "react";
import "./PokemonCard.css";

function SetMainName(props) {
  return <div className="name-text">{props.engname}</div>;
}
function SetStatText(props) {
  return (
    <div className="stat-text">
      {props.statname}: {props.name}
    </div>
  );
}
//function setType takes in a type and prints out a span
function SetType(props) {
  return <span className={props.type.toLowerCase()}>{props.type}</span>;
}

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div className="pokemon-card">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
          alt="test"
          width="200"
        ></img>
      </div>
      <SetMainName engname={name.english} japname={name.japanese} chiname={name.chinese}/>
      <div className="pokemon-card__type">
        {type.map(pokeType => {
          return <SetType type={pokeType} />;
        })}
      </div>
      {Object.entries(base).map((sepBase,index) => {
          return <SetStatText statname={sepBase[0]} name={sepBase[1]} />
      })}
    </div>
  );
}

export default PokemonCard;
