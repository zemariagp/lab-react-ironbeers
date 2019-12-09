import React from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div >
        <div className="card">
          <img src="../images/beers.png" ></img>
          <Link to="/beers">Beers</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quibusdam, aspernatur excepturi magnam ducimus omnis. Voluptas quaerat dolore porro molestiae. Natus vel molestiae laboriosam libero qui quis neque eos voluptate.</p>
        </div>
        <div className="card">
          <img src="../images/new-beer.png" ></img>
          <Link to="/random-beer">Random Beer!</Link>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus est, cupiditate voluptate dolor maxime dolorem molestias dolorum sit odio facere. Eveniet, laboriosam architecto? Earum, nam deserunt! Eos ipsa modi placeat!</p>
        </div>
        <div className="card">
          <img src="../images/random-beer.png" ></img>
          <Link to="/new-beer">Add Beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error quas rem obcaecati ducimus nisi. Nulla reiciendis, nam non aspernatur unde consectetur mollitia possimus sapiente sit? Quisquam non quod maxime?</p>
        </div>




      </div>
    </div>
  )
}

export default Home
