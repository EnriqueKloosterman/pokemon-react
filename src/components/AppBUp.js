import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import ShowPokemos from './components/ShowPokemos';

function App() {
  const pokemonUrl = `http://pokeapi.co/api/v2/pokemon/?limit=15`;
  const [pokemon, setPokemon] = useState([]);
  

  useEffect (() => {
    async function fetchData(pokemon) {
      const res = await axios.get(pokemonUrl);
      console.log(res);
      setPokemon(res.data.results);      
    }
    

    
    fetchData();
  

  }, []);

  // useEffect(() => {
  //     axios.get(`http://pokeapi.co/api/v2/pokemon/1`)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //     // axios.get('https://swapi.dev/api/films')
  //     // .then((response) => {
  //     //   console.log(response)
  //     // })
  //     // .catch((err) => {
  //     //   console.log(err);
  //     // })

      
  // })



  return (
    <div>
      <h1 className="h1">que hay de nuevo viejo</h1>
      <ShowPokemos pokemon={ pokemon } />
      
    </div>
  );
}


export default App;
