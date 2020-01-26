import React from "react";
import "./App.css";
import PokemonGallery from "./components/PokemonGallery";
import Home from "./components/Home";
import About from "./components/About";
import routelink from "./constants/route";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <Link to={routelink.home}>Home</Link>
        <Link to={routelink.about}>About</Link>
        <Link to={routelink.gallery}>Gallery</Link>
      </header>
      <div>
        <Switch>
          <Route path={routelink.home} component={Home} />
          <Route path={routelink.about} component={About} />
          <Route path={routelink.gallery} component={PokemonGallery} />
          <Redirect to={routelink.home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
