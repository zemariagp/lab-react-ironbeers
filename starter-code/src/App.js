import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AllBeers from "./views/AllBeers"
import RandomBeer from "./views/RandomBeer"
import NewBeer from "./views/NewBeer"
import Home from "./views/Home"
import Header from "./components/Header"
import OneBeer from "./views/OneBeer"
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (


      <BrowserRouter>


        <Switch>

          <Route path="/beers/:id" component={OneBeer}></Route>
          <Route path="/beers"><Header></Header><AllBeers /></Route>
          <Route path="/random-beer"><RandomBeer /></Route>
          <Route path="/new-beer"><Header></Header><NewBeer /></Route>
          <Route path="/"><Home /></Route>

        </Switch>


      </BrowserRouter>


    );
  }
}

export default App;
