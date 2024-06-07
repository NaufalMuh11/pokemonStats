import React from 'react'
import Logo from "../assets/pokemon.png";

function Navbar({ setPokemonName, searchPokemon }) {
  return (
    <div className="bg-slate-50 p-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-black text-2xl font-bold">
           <img src={Logo} alt="Pokemon-Logo" className=""/>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="bg-slate-50 border border-gray-600 text-black placeholder-gray-400 text-md p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..." onChange={(event)=>{
              setPokemonName(event.target.value);
            }}
          />
          <button onClick={searchPokemon} className="btn">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
