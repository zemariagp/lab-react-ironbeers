import axios from "axios";

export const getAllBeers = () => {
  return new Promise((resolve, reject) => {
    const data = axios.get("https://ih-beers-api2.herokuapp.com/beers");
    console.log(data);
    resolve(data);

  })
}


export const getOneBeer = (id) => {
  return new Promise((resolve, reject) => {
    const data = axios.get("https://ih-beers-api2.herokuapp.com/beers/" + id);

    resolve(data);
  })
}

export const getRandomBeer = () => {
  return new Promise((resolve, reject) => {
    const data = axios.get("https://ih-beers-api2.herokuapp.com/beers/random/");
    console.log(data);
    resolve(data);
  })
}
