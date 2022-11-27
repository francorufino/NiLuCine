import React, { useState, useEffect } from 'react';
import './Movies.css';

function Movies() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((data) => data.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div>
      <h1>This is movies page</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
