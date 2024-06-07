import React from 'react'
import Attack from "../assets/Attack.png";
import Hp from "../assets/Hp.png";
import Def from "../assets/Defense.png";
import Spd from "../assets/Speed.png";

function PokDetail({ pokemon, pokemonChosen }) {
  return (
<div className="flex flex-col w-full lg:flex-row p-4 lg:p-8 max-w-screen-lg mx-auto">
      <div className="grid flex-grow h-auto card bg-base-300 rounded-box place-items-center mx-4">
        {pokemonChosen ? (
          <>
            <img src={pokemon.img} alt={pokemon.name} className="h-32 w-32" />
            <h2 className="text-xl font-semibold">{pokemon.name}</h2>
            <p className="text-sm">Type: {pokemon.type}</p>
          </>
        ) : (
          <h1>Please choose a Pokemon</h1>
        )}
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="flex flex-col justify-start lg:flex-grow h-auto card bg-base-300 rounded-box place-items-center mx-4">
        {pokemonChosen && (
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="flex items-center space-x-2 ">
              <img src={Hp} alt="HP" className="h-6 w-6" />
              <div>
                <p>HP: {pokemon.hp}</p>
                <progress className="progress progress-warning w-56 h-4 border border-black" value={pokemon.hp} max="250"></progress>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img src={Attack} alt="Attack" className="h-6 w-6" />
              <div>
                <p>Attack: {pokemon.attack}</p>
                <progress className="progress progress-warning w-56 h-4 border border-black" value={pokemon.attack} max="250"></progress>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img src={Def} alt="Defense" className="h-6 w-6" />
              <div>
                <p>Defense: {pokemon.defense}</p>
                <progress className="progress progress-warning w-56 h-4 border border-black" value={pokemon.defense} max="250"></progress>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img src={Spd} alt="Defense" className="h-6 w-6" />
              <div>
                <p>Speed: {pokemon.speed}</p>
                <progress className="progress progress-warning w-56 h-4 border border-black" value={pokemon.defense} max="250"></progress>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PokDetail
