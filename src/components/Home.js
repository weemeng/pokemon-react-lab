import React from "react";
import "./Home.css";

function getWindowSize() {
  let wHeight = window.innerHeight;
  let wWidth = window.innerWidth;
  return wHeight < wWidth ? wHeight : wWidth;
}

const Home = function() {
  const wSize = getWindowSize();
  return (
    <div className="home-style">
      {/* <p> This is the home page for the pokedex</p> */}
      <img
        src={`${process.env.PUBLIC_URL}/downloadedImage/pokemonLogo.svg`}
        alt="pokemonLogo"
        class="body-image"
        width={wSize*2/3}
      ></img>
      <p className="body-text">Pokémon (English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/), also known as Pocket Monsters in Japan, is a media franchise managed by the Pokémon Company, a Japanese company founded and with shares divided between Nintendo, Game Freak, and Creatures. The franchise copyright and Japanese trademark is shared by all three companies, but Nintendo is the sole owner of the trademark in other countries. The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is "Gotta Catch 'Em All". Works within the franchise are set in the Pokémon universe.</p>
    </div>
  );
};

export default Home;
