import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './componentes/PokeCard/PokeCard';
import styled from 'styled-components';
import Header from './componentes/Header/Header';

const Grid = styled.div`
  margin: 80px 1.5rem 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  grid-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const App = () => {
  const url =
    'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  const [pokemons, updatePokemons] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);
  const [errors, updateErrors] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => updatePokemons(resp?.data?.pokemon))
      .catch((error) => updateErrors(error))
      .finally(() => updateIsLoading(false));
  }, []);

  if (isLoading) return <h1>Carregando...</h1>;

  if (errors) return <h1>`Deu ruim: ${errors}`</h1>;

  return (
    <>
      <Header />
      <Grid>
        {pokemons.map((pokemon) => (
          <PokeCard {...pokemon} />
        ))}
      </Grid>
    </>
  );
};

export default App;
