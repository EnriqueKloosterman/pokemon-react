import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const pokemonUrl = (`http://pokeapi.co/api/v2/pokemon/`);
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});
  
  useEffect(() => {
    pokemonApears()
  }, [])

  async function pokemonApears() {
    // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + pokeId())
    const res = await axios.get(pokemonUrl + pokeId())
    console.log(res.data)
    setWildPokemon(res.data)
  }

  const pokeId = () => {
    const min = Math.ceil(1)
    const max = Math.ceil(151)
    return Math.floor(Math.random() * (max - min + 1)) +min
  }

  const catchPokemon = (pokemon) => {
    setPokedex(state => {
      const exist =  (state.filter(poke => pokemon.id === poke.id).length > 0);

      if(!exist) {
        state = [...state, pokemon]
        state.sort(function(a, b){
          return a.id - b.id
        })
      }
      return state
    })
    pokemonApears()
  }

  const remove = id => {
    setPokedex(state => state.filter(poke => poke.id !== id))
  }





  return (
    <div>
        <header>
          <h1> Pokemon hunt </h1>
          <h2> Be ready </h2>
        </header>
        
        <section className='wild-pokemon'>
          <h2>Un pokemon salvaje ha aprecido</h2>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${wildPokemon.id}.svg`} alt="" className="poke-image"/>
          <h4>{wildPokemon.name}</h4>
          <button onClick={() => catchPokemon(wildPokemon) }>Atrapar</button>
        </section>

        <section className="pokedex-list">
          <h2>POKEDEX</h2>
          <div className='pokedex-list-img'>

          {pokedex.map(pokemon => (
            <div className='pokemon' key={pokemon.id}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" className="poke-image-2" />
              <h3 className="pokemon-name">{pokemon.name}</h3>
              <button className='remove' onClick={()=> remove(pokemon.id)}>&times;</button>
            </div>
          ))}
          </div>
        </section>


      
    </div>
  );
}


export default App;
