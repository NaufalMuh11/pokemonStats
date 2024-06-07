import React, { useState, useEffect } from 'react';
import Logo from "../assets/pokemon.png";
import Axios from 'axios';

function Navbar({ setPokemonName }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((response) => {
        const results = response.data.results.map(pokemon => pokemon.name);
        results.sort();
        setPokemonList(results);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon list:', error);
      });
  }, []);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    setPokemonName(pokemon);
  };

  return (
    <div className="bg-slate-50 p-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-black text-2xl font-bold">
          <img src={Logo} alt="Pokemon-Logo" className=""/>
        </div>
        <div className="flex items-center space-x-2">

          <select
            value={selectedPokemon}
            onChange={(event) => handleSelectPokemon(event.target.value)}
            className="bg-slate-50 border border-gray-600 text-black placeholder-gray-400 text-md p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose a Pokemon</option>
            {pokemonList.map(pokemon => (
              <option key={pokemon} value={pokemon}>{pokemon}</option>
            ))}
          </select>
          <button className="btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
