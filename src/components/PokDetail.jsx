import React from 'react';
import Attack from "../assets/Attack.png";
import Hp from "../assets/Hp.png";
import Def from "../assets/Defense.png";
import Spd from "../assets/Speed.png";
import StatBar from './StatBar';

function PokDetail({ pokemon, pokemonChosen }) {
  return (
    <div className="flex flex-col w-full lg:flex-row p-4 lg:p-8 max-w-screen-lg mx-auto">
      <div className="grid flex-grow h-auto card bg-base-300 rounded-box place-items-center mx-4">
        {pokemonChosen ? (
          <>
            <img src={pokemon.img} alt={pokemon.name} className="size-48" />
            <h2 className="text-xl font-semibold">{pokemon.name}</h2>
            <p className="text-base">Type: {pokemon.type}</p>
          </>
        ) : (
          <h1>Please choose a Pokemon</h1>
        )}
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="flex flex-col justify-start lg:flex-grow h-auto card bg-base-300 rounded-box place-items-center mx-4">
        {pokemonChosen && (
          <div className="grid grid-cols-1 gap-4 mt-4">
            <StatBar label="HP" value={pokemon.hp} max={250} icon={Hp} />
            <StatBar label="Attack" value={pokemon.attack} max={250} icon={Attack} />
            <StatBar label="Defense" value={pokemon.defense} max={250} icon={Def} />
            <StatBar label="Speed" value={pokemon.speed} max={250} icon={Spd} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PokDetail;
