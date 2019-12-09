import React, { Component } from 'react'
import { getRandomBeer } from "../services/listall"
import Header from "../components/Header"

export class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { oneBeer: null }
  }

  componentDidMount() {
    getRandomBeer().then(
      data => { this.setState({ oneBeer: data.data }) }

    ).catch();

  }
  render() {
    return (
      <div>

        <Header />
        {this.state.oneBeer &&
          (<div>
            <img src={this.state.oneBeer.img_url} alt=""></img>
            <h1>{this.state.oneBeer.name}</h1>
            <h5>{this.state.oneBeer.tagline}</h5>
            <p>{this.state.oneBeer.description}</p>
            <small>{this.state.oneBeer.contributed_by}</small>
          </div>)}

      </div>
    )
  }
}

export default RandomBeer;
