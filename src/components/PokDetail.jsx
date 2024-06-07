import React from 'react'

function PokDetail() {
  return (
<div className="flex flex-col w-full lg:flex-row p-4 lg:p-8 max-w-screen-lg mx-auto">
  <div className="grid flex-grow h-32 w-10 card bg-base-300 rounded-box place-items-center mx-4">
  {!pokemonChosen ? (
        <h1> Please choose a Pokemon</h1>
    ):(
    <>
    <img src={pokemon.img} />
    <h1>{pokemon.name}</h1>
    </>
    )

    }content
  </div>
  <div className="divider lg:divider-horizontal"></div>
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center mx-4">
    {pokemonChosen (
        <>
        <h3>Species: {pokemon.species}</h3>
        <h3>Type: {pokemon.type}</h3>
        <h3>Hp : {pokemon.hp}</h3>
        <h3>Attack : {pokemon.attack}</h3>
        <h3>Defense: {pokemon.defense}</h3>
        </>
    )}
  </div>
</div>

  )
}

export default PokDetail
