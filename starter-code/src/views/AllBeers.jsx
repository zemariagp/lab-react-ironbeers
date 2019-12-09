import React, { Component } from 'react'
import { getAllBeers } from "../services/listall"
import { Link } from "react-router-dom"

export class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = { allBeers: [] }
  }

  get color() {
    return ('#' + Math.floor(Math.random() * 16777215).toString(16));
  }
  componentDidMount() {
    getAllBeers().then(
      data => { this.setState({ allBeers: data.data }) }


    ).catch(err => (<h1>there was an error</h1>));

  }
  render() {
    return (
      <div>

        {this.state.allBeers.map(

          e => {
            return (<div className="beerCard" style={{ backgroundColor: this.color }}>
              <img style={{ maxHeight: "200px" }} src={e.image_url} alt=""></img>
              <div className="cardContent">
                <h4><Link to={"/beers/" + e._id} style={{ color: this.color }} >{e.name}</Link></h4>
                <p>{e.tagline}</p>
                <small><strong>Contributed by:</strong>{e.contributed_by}</small>

              </div>
            </div>)
          }

        )
        }
      </div >
    )
  }
}

export default AllBeers
