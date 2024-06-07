import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import PokDetail from './components/PokDetail';
import Axios from 'axios'

function App() {
  const [pokemonName,setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: "", 
    species: "", 
    img: "", 
    hp:"",
    attack: "",
    defense: "",
    type:""});

  const searchPokemon =() =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default, 
        hp:response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat, // Mengambil stat attack
        defense: response.data.stats[2].base_stat, // Mengambil stat defense
        type:response.data.types[0].type.name})
      ;
      setPokemonChosen(true);
    })
    .catch((error) => {
      console.error('Error fetching Pokemon data:', error);
    });
  }

  return (
    <div className='bg-slate-50 h-screen'>
      <Navbar setPokemonName={setPokemonName} searchPokemon={searchPokemon}/>
      <PokDetail pokemon={pokemon} pokemonChosen={pokemonChosen}/>
    </div>
  );
}

export default App
